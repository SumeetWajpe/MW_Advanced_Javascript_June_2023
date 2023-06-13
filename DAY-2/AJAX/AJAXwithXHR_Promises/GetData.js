function GetData() {
  return new Promise(function (resolve, reject) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        resolve( xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status !== 200) {
        reject("Something went wrong !" + xmlHttpReq.status);
      }
    };
    xmlHttpReq.send(); // places the async call
  });
}
