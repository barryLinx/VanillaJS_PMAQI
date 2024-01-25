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

//const fastifyURL='';
//資料
export const getData = async () => {
  //let data;
  const data =  await sendHttpRequest("GET", url);  
  //const res = await fetch('http://127.0.0.1:8080/api/aqi');  
  console.log("data =",data);
  //console.log(res.json());
  //const data = res.json();
  // console.log(apiData);
  return data;
};

