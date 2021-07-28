import "../scss/style.scss";
import "../../node_modules/bootstrap/js/dist/dropdown";

// 介面 Dom

const selectdom = document.querySelector(".form-select");
const countySelect = document.querySelector("#county");
const countyDate = document.querySelector("#countyDate");
const countyTime = document.querySelector("#countyTime");
const thSite = document.querySelector("#thSite");
const thaqi = document.querySelector("#thaqi");
const SiteDetailed = document.querySelector(".area-detailed");
const SiteName = document.querySelector("#area");

//資料儲存
let apiData;
let fields;
let unit;
//api
const url = `${process.env.URL}${process.env.API_KEY}`;

/**
 * api 擷取資料
 * @param {*} method
 * @param {*} url
 * @returns
 */
function sendHttpRequest(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = "json"; //等於 JSON.parse(xhr.response);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        //console.log(xhr.response);
        resolve(xhr.response);
      }
      if (xhr.status >= 400) {
        reject(xhr.response);
      }
    };
    xhr.onerror = () => {
      console.error(xhr.statusText);
      reject("出現錯誤(Error)");
    };
    xhr.send(null);
  });
  return promise;
}

//資料
const getData = async () => {
  //let data;
  const data =  await sendHttpRequest("GET", url);
  // await sendHttpRequest("GET", url).then((res) => {
  //   //console.log(res.records);
  //   data = res;
  //   //console.log(data);
  //   //console.log(typeof data); //data的類型object，已經被JSON.Parse() 轉成object
  // });
  console.log(data);

  // console.log(apiData);
  return data;
};

//區域handle
function area(data) {
  let temparr = [];
  data.forEach((el) => {
    temparr.push(el.County);
  });
  let result = new Set(temparr);
  //return [...data];
  areaUI([...result]);
}

function areaUI(data) {
  let temp = '<option value="" disabled selected>請選擇地區</option>';
  data.forEach((el) => {
    temp += `<option value="${el}">${el}</option>`;
  });
  selectdom.innerHTML = temp;
}

function countyUI(param) {
  countySelect.textContent = param.County;
  countyDate.textContent = param.dateTime[0];
  countyTime.textContent = param.dateTime[1].substring(0, 5);
  // countySelect.textContent = param.name;
}

function SiteTitleUI(data) {
  // let thdata = data || data[0];
  let bgClass = new RegExp(
    /bg-(good|warning-100|warning-200|serious|sserious|harm)/g
  );

  thSite.textContent = data[0].SiteName;
  thaqi.innerHTML = data[0].AQI ? data[0].AQI : '<div class="spinner-border border-4  text-dark" role="status"></div>';
  let status = aqicolor(data[0].Status);
 // console.log("thaqi_match", thaqi.className.match(bgClass));
  thaqi.classList.remove(thaqi.className.match(bgClass));
  thaqi.classList.add(`bg-${status}`);
  //   if (thaqi.className.match(bgClass)) {
  //     thaqi.className = thaqi.className.replace(wiClass, '')
  // }
  // thaqi.style.color= ""
  //SiteDetailed
}

function SiteNameUI(data) {
  //SiteName.innerHtml;
  //console.log(data);
  let str = "";
  data.forEach((d) => {
    let status = aqicolor(d.Status);
    str += `<div class="btn-ef col-lg-6" data-site=${d.SiteName}>
              <div class="d-flex justify-content-center text-center" >
                 <div  class="site_name fs-1 p-4 border border-end-0  border-5 border-dark bg-white w-100 ff-NotoSans">${d.SiteName}</div>
                 <div class="fs-1 p-4 border border-5 border-dark bg-${status} w-100 ff-OpenSans">
                 ${!d.AQI? '<div class="spinner-border border-3  text-dark" role="status"></div>': d.AQI}
                     
                 </div>
              </div>              
            </div>`;
  });
  SiteName.innerHTML = str;
  //  siteName_registered_Click();//事件註冊
}

function siteName_registered_Click() {
  const btnEf = [...document.querySelectorAll(".btn-ef")];
  btnEf.forEach((btn) => {
    btn.addEventListener("click", (el) => {
      let sitename = btn.dataset.site;
      let f = apiData.filter((el) => {
        return el.SiteName == sitename;
      });
      console.log("f=>", f);
      SiteDetailUI(f[0]);
      SiteTitleUI(f);
    });
  });
}

/**
 * 傳入 object
 * @param {*} data
 */
function SiteDetailUI(data) {
  //console.log("detail",data);
  let str = "";

  unit.forEach((val) => {
    str += `<li class="d-flex border-bottom border-2 border-dark mb-3">    
          <p class="me-auto fw-bold fs-4 ff-NotoSans">${
            val.u[0]
          }<small class="fs-6">(${val.u[1]}</small> </p>
          <p class="fw-bold fs-4 ff-OpenSans">${data[val.Ename]}</p>
        </li>`;
  });
  SiteDetailed.innerHTML = str;
}

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

function fieldsHandel() {
  let unitname = ["SO2", "O3", "CO", "PM10", "PM2.5", "NO2", "NOx"];
  let uarry = [];
  let unit = fields.map((val) => {
    return {
      Ename: val.id,
      u: val.info.label.split("("),
    };
  });

  unitname.forEach((val) => {
    unit.forEach((u) => {
      //console.log(val);
      if (u.Ename === val) {
        uarry.push(u);
      }
    });
  });
  return uarry;
}

function countyFliter(County = "高雄市") {
  let f = apiData.filter((el) => {
    return el.County == County;
  });
  let dateTime = f[0].PublishTime.split(" ");
  return {
    data: f,
    datetime: dateTime,
  };
}

// init 事件
document.addEventListener("DOMContentLoaded", function () {
  getData().then((d) => {
    apiData = d.records;
    fields = d.fields;
    unit = fieldsHandel();
    let { data, datetime } = countyFliter();
    area(d.records);
    countyUI({ dateTime: datetime, County: data[0].County });
    SiteTitleUI(data);
    SiteNameUI(data);
    SiteDetailUI(data[0]);
    siteName_registered_Click(); //事件註冊
  });
});

/**
 * select 事件
 */
selectdom.addEventListener("change", (event) => {
  // enent handle
  let valOption = event.target.value || "高雄市"; //獲取option的value
  //data handle
  let { data, datetime } = countyFliter(valOption);
  // let f = apiData.filter((el) => {
  //   return el.County == valOption;
  // })
  // let dateTime = f[0].PublishTime.split(' ')
  //UI bundle
  countyUI({ dateTime: datetime, County: valOption });
  SiteTitleUI(data);
  SiteNameUI(data);
  SiteDetailUI(data[0]);
  siteName_registered_Click(); //事件註冊
});
