import '../scss/style.scss';
import '../../node_modules/bootstrap/js/dist/dropdown';

//require('dotenv').config();

//api
const url = process.env.API;
//const url ='https://data.epa.gov.tw/api/v1/aqx_p_432?format=json&api_key=f72fe7f3-5981-476c-a1e9-4561d54d7b22';
const xhr = new XMLHttpRequest();
function get() {
  xhr.open('get', url, true);
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
}
