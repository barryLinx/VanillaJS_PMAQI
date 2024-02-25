//api

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
      //console.error(xhr.statusText);
    // //   if(xhr.statusText.startsWith("Access to XMLHttpRequest ")){
    // //     reject(xhr.statusText);
    // //     //pasre the string to check error code
    // //     //and take appropriate actions
    // // }
      reject("出現錯誤(Error)");
    };
    xhr.send(null);
  });
  return promise;
}

//const fastifyURL='';
//資料
export const getData = async () => {
  // const url = `${process.env.URL}${process.env.API_KEY}`;
  // const data =  await sendHttpRequest("GET", url);
const data =  await sendHttpRequest("GET", 'https://fastify-aqi-provide-barrylinx.vercel.app/api/aqi');  
  
  //console.log("data =",data);
  //console.log(res.json());
  //const data = res.json();  
  // console.log(apiData);
  return data;
};

