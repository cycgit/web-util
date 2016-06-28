(function () {

  var util = {}


  var paramsData = function () {
    var params = location.search.slice(1);
    params = params.split('&');
    var result = {};
    var val;
    for (var i = 0, len = params.length; i < len; i++) {
      val = params[i].split('=');
      result[val[0]] = val[1] || '';
    }
    return result;
  }();



  util.params = function (params) {
    if(typeof params == 'undefined') return paramsData || {}

    if(typeof params != 'object') throw new Error('params must object')


    for(var key in params){
      paramsData[key] = params[key]
    }

    location.href = setParams(paramsData)

  }

  function setParams(data) {

    var str = ''
    for(var key in data){
      str+= key+'='+data[key]+ '&'
    }
    str = str.substring(0, str.length -1)
    return location.origin + location.pathname + '?'+str

  }
  
  
  window.util = util


})()
