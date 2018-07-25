function fetchApi(server, params, callback, errorCallback) {

  $.ajax({
      url: server,
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      data: params,
      type: "POST",
      dataType: "json",
      success: callback,
      error: errorCallback,
  });

}
