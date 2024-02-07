import "../scss/style.scss";
import "../../node_modules/bootstrap/js/dist/dropdown";
import {getData} from "./api";

// 介面 Dom

const selectdom = document.querySelector(".form-select");
const countySelect = document.querySelector("#county");
const countyDate = document.querySelector("#countyDate");
const countyTime = document.querySelector("#countyTime");
const thSite = document.querySelector("#thSite");
const thaqi = document.querySelector("#thaqi");
const SiteDetailed = document.querySelector(".area-detailed");
const SiteName = document.querySelector("#area");
const overlay = document.querySelector(".overlay");


//資料儲存
let apiData;
let fields;
let unit;

//區域handle
function area(data) {
  let temparr = [];
  data.forEach((el) => {
    temparr.push(el.county);
  });
  let result = new Set(temparr);
  //return [...data];
  areaUI([...result]);
}

/** UI Render */
function areaUI(data) {
  let temp = '<option value="" disabled selected>請選擇地區</option>';
  data.forEach((el) => {
    temp += `<option value="${el}">${el}</option>`;
  });
  selectdom.innerHTML = temp;
}

/**UI Render */
function countyUI(param) {
  countySelect.textContent = param.county;
  countyDate.textContent = param.dateTime[0];
  countyTime.textContent = param.dateTime[1].substring(0, 5);
  // countySelect.textContent = param.name;
}

/**UI Render */
function SiteTitleUI(data) {
  // let thdata = data || data[0];
  let bgClass = new RegExp(
    /bg-(good|warning-100|warning-200|serious|sserious|harm)/g
  );

  thSite.textContent = data[0].sitename;
  thaqi.innerHTML = data[0].aqi ? data[0].aqi : '<div class="spinner-border border-4  text-dark" role="status"></div>';
  let status = aqicolor(data[0].status);
 // console.log("thaqi_match", thaqi.className.match(bgClass));
  thaqi.classList.remove(thaqi.className.match(bgClass));
  thaqi.classList.add(`bg-${status}`);
  //   if (thaqi.className.match(bgClass)) {
  //     thaqi.className = thaqi.className.replace(wiClass, '')
  // }
  // thaqi.style.color= ""
  //SiteDetailed
}

/**UI Render */
function SiteNameUI(data) {
  //SiteName.innerHtml;
  //console.log(data);
  let str = "";
  data.forEach((d) => {
    let status = aqicolor(d.status);
    str += `<div class="btn-ef col-lg-6" data-site=${d.sitename}>
              <div class="d-flex justify-content-center text-center" >
                 <div  class="site_name fs-1 p-4 border border-end-0  border-5 border-dark bg-white w-100 ff-NotoSans">${d.sitename}</div>
                 <div class="fs-1 p-4 border border-5 border-dark bg-${status} w-100 ff-OpenSans">
                 ${!d.aqi? '<div class="spinner-border border-3  text-dark" role="status"></div>': d.aqi}
                     
                 </div>
              </div>              
            </div>`;
  });
  SiteName.innerHTML = str;
  //  siteName_registered_Click();//事件註冊
}

/**事件Event */
function siteName_registered_Click() {
  const btnEf = [...document.querySelectorAll(".btn-ef")];
  btnEf.forEach((btn) => {
    btn.addEventListener("click", () => {
      let sitename = btn.dataset.site;
      let f = apiData.filter((el) => {
        return el.sitename == sitename;
      });
     // console.log("f=>", f);
      SiteDetailUI(f[0]);
      SiteTitleUI(f);
    });
  });
}

/**
 * 傳入 object ,UI Render
 * @param {*} data
 */
function SiteDetailUI(data) {
  //console.log("detail",data);
  let str = "";

  unit.forEach((val) => {
    str += `<li class="d-flex border-bottom border-2 border-dark mb-3">    
          <p class="me-auto fw-bold fs-4 ff-NotoSans">${
            val.u[0]
          }<small class="fs-6">(${val?.u[1]}</small> </p>
          <p class="fw-bold fs-4 ff-OpenSans">${data[val.Ename]}</p>
        </li>`;
  });
  SiteDetailed.innerHTML = str;
}
/**事件Event */
function aqicolor(aqi) {
  let colorText = "";
  switch (aqi) {
    case "良好":
      colorText = "good";
      break;
    case "普通":
      colorText = "warning-100";
      break;
    case "對敏感族群不健康":
      colorText = "warning-200";
      break;
    case "對所有族群不健康":
      colorText = "serious";
      break;
    case "非常不健康":
      colorText = "sserious";
      break;
    case "危害":
      colorText = "harm";
      break;

    default:
      colorText = "primary";
      break;
  }
  return colorText;  
}
/**事件Event */
function fieldsHandel() {
  let unitname = ["so2", "o3", "co", "pm10", "pm2.5", "no2", "nox"];
  let uarry = [];
  let unit = fields.map((val) => {
    //console.log("unit",val.info.label);
    return {
      Ename: val.id,
      u: val.info.label.split("（"),
    };
  });
  console.log("unit -> u",unit[10]);
  // 可以簡化 hsahmap
  unitname.forEach((val) => {
    unit.forEach((u) => {
      //console.log("unitname",val);
      //console.log("u",u);
      if (u.Ename === val) {
        uarry.push(u);
      }
    });
  });
  return uarry;
}
/**事件Event */
function countyFliter(County = "高雄市") {
  let f = apiData.filter((el) => {
    return el.county == County;
  });
  let dateTime = f[0].publishtime.split(" ");
  return {
    data: f,
    datetime: dateTime,
  };
}

function isOverlay(isdata){
  if(!isdata) return overlay.style.transform='scale(1)';
  if(isdata) return overlay.style.transform='scale(0)';
}


// init 事件
document.addEventListener("DOMContentLoaded", async function (e) {
  isOverlay(false);
  let d = await getData();
  
 //console.log("apiData = ", d);
  
  apiData = d.records;
  fields = d.fields;

  // if(apiData){
  //   overlay.style.transform='scale(1)';
  // }
  unit = fieldsHandel();
  
  let { data, datetime } = countyFliter();  
  // if(data) overlay.style.transform='scale(0)';  
  isOverlay(data);

  area(d.records);
  countyUI({ dateTime: datetime, County: data[0].County });
  SiteTitleUI(data);
  SiteNameUI(data);
  SiteDetailUI(data[0]);
  siteName_registered_Click(); //事件註冊
})

/**
 * select 事件
 */
selectdom.addEventListener("change", (event) => {
  // enent handle
  let valOption = event.target.value || "高雄市"; //獲取option的value
  //data handle
  let { data, datetime } = countyFliter(valOption);
  
  //UI bundle
  countyUI({ dateTime: datetime, County: valOption });
  SiteTitleUI(data);
  SiteNameUI(data);
  SiteDetailUI(data[0]);
  siteName_registered_Click(); //事件註冊
});
