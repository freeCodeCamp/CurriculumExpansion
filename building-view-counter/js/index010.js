document.addEventListener('DOMContentLoaded', function () {
  const getViewsReq = new XMLHttpRequest();
  getViewsReq.open("GET", "/views", true);

  getViewsReq.onerror = function(err) {
    console.log(`A network error occurred while getting view count: ${JSON.stringify(err)}`);
  }
  getViewsReq.ontimeout = function (err) {
    console.log(`A timeout error occurred while getting view count: ${JSON.stringify(err)}`);
  }

  getViewsReq.send();
  getViewsReq.onload = function () {
    if (getViewsReq.status >= 400 && getViewsReq.status < 500) {
      console.log(`A client error occurred while getting view count. Status code: ${getViewsReq.status}. Status Text: ${getViewsReq.statusText}. Response Body: ${getViewsReq.responseText}`);
      return;
    }

    if (getViewsReq.status >= 500) {
      console.log(`A server error occurred while getting view count. Status code: ${getViewsReq.status}. Status Text: ${getViewsReq.statusText}. Response Body: ${getViewsReq.responseText}`);
      return;
    }
    console.log(`get view count response: ${getViewsReq.responseText}`);

    const json = JSON.parse(getViewsReq.responseText);
    const views = json.views;

    document.getElementById("viewCount").innerHTML = views;
    document.getElementById("message").style.display = "block";
  }

  const updateViewsReq = new XMLHttpRequest();
  updateViewsReq.open("POST", "/views", true);

  updateViewsReq.onerror = function (err) {
    console.log(`A network error occurred while updating view count: ${JSON.stringify(err)}`);
  }
  updateViewsReq.ontimeout = function (err) {
    console.log(`A timeout error occurred while updating view count: ${JSON.stringify(err)}`);
  }

  updateViewsReq.send();
  updateViewsReq.onload = function () {
    if (updateViewsReq.status >= 400 && updateViewsReq.status < 500) {
      console.log(`A client error occurred while updating view count. Status code: ${updateViewsReq.status}. Status Text: ${updateViewsReq.statusText}. Response Body: ${updateViewsReq.responseText}`);
      return;
    }

    if (updateViewsReq.status >= 500) {
      console.log(`A server error occurred while updating view count. Status code: ${updateViewsReq.status}. Status Text: ${updateViewsReq.statusText}. Response Body: ${updateViewsReq.responseText}`);
      return;
    }

    console.log(`update view count response: ${updateViewsReq.responseText}`);
  }
});
