var util = {};

 /**
  * 获取url后面的参数
  * @param name String
  * @returns {null}
  */
 util.getQueryString = function (name) {
     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
     var r = window.location.search.substr(1).match(reg);
     if (r != null)
         return unescape(r[2]);
     return null;
 }

 
