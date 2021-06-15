import '../scss/style.scss';
import '../../node_modules/bootstrap/js/dist/dropdown';

// 介面 Dom
const selectdom = document.querySelector('.form-select');
const countySelect = document.querySelector('#county');
const SiteDetailed = document.querySelector('.area-detailed');
const SiteName = document.querySelector('#area');


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
    xhr.responseType = 'json';//等於 JSON.parse(xhr.response);
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
      reject('出現錯誤(Error)')
    };
    xhr.send(null);
  });
  return promise;
}

//資料
const getData = async () => {
  let data;
  await sendHttpRequest('GET', url).then(res => {
    //console.log(res.records);
    data = res.records;
    //console.log(data);
    //console.log(typeof data); //data的類型object，已經被JSON.Parse() 轉成object
  });
  //console.log(data);
  return data;
};

//UI 台灣所有地區
// const areaUI = () =>{
// }

//區域handle
function area() {
  let temparr = [];
  let result = getData().then(d => {
    d.forEach(el => {
      temparr.push(el.County);
    });
    let data = new Set(temparr);
    return [...data];
    //console.log([...result]);
  });
  //console.log(result);
  areaUI(result);
}

async function areaUI(data) {

  let str = await data.then(d => {
    let temp = '<option value="" disabled selected>請選擇地區</option>';
    d.forEach(el => {
      temp += `<option value="${el}">${el}</option>`;
    })
    //console.log(d);
    return temp
  });

 // console.log("str", str);
  selectdom.innerHTML = str;
}

// init 
document.addEventListener('DOMContentLoaded', function () {
  area();

})