function GetData(callback) {
  // 1. Instanciate XMLHttpRequest
  // 2. Open a connection
  // 3. To register on an event - onreadystatechange
  // 4. To make the async call (send)

  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      //console.log(xmlHttpReq.responseText);
      callback(xmlHttpReq.responseText);
    }
  };
  xmlHttpReq.send(); // places the async call
}
