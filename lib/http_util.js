function request(url, params) {
  return new Promise((resolve, reject) => {
    window.index = window.index || 1;
    window.index++;
    $.ajax({
      type: "GET",
      url: url,
      data: params,
      dataType: "jsonp",
      jsonpCallback: `callback${window.index}`
    });


    function callbackA(data) {
      resolve(data)
    }

    window[`callback${window.index}`] = callbackA
  })
}

