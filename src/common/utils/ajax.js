let xmlHttp;
export const loadXMLDoc = (url) => {
    if (!url){
        url = location.origin;
    }
    xmlHttp = null;
    if (window.XMLHttpRequest){
        // code for IE7, Firefox, Opera, etc.
        xmlhttp=new XMLHttpRequest();
    } else if(window.ActiveXObject){
        // code for ie6, ie5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(xmlhttp != null){
        xmlhttp.onreadystatechange = state_Change;
        xmlhttp.open('GET', url, true);
        xmlhttp.send(null);
    } else {
        alert("You browser does not support XMLHTTP.");
    }
}

state_Change = ()=>  {
    if (xmlhttp.readyState == 4){
        if(xmlhttp.status == 200){
            console.log("Status: " + xmlhttp.status);
            console.log("StatusText: "+ xmlhttp.statusText);
            console.log("responseText: "+ xmlhttp.responseText);
        } else {
            console.log("Problem retrieving XML data: " + xmlhttp.statusText);
        }
    }
}


/* promise对象实现原生XMLHttpRequest请求
用于发出一个针对json数据的http请求

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) { // reject返回的函数
  console.error('出错了', error);
});
*/
export const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject){
      const handler = function() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      const client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
  
    });
  
    return promise;
  };