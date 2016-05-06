;(function(undefined){
  var ajax = function(url, successCallback, failCallback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = function() {
      if (this.readyState === 4) {

        if (this.status >= 200 && this.status < 400) {
          successCallback(this.responseText);
        } else {
          failCallback();
        }
      }
    };

    request.send();
    request = null;
  };
  // fetch docs
  ajax('./README.md', function(d) {
    document.getElementById('docs').innerHTML = marked(d);
  });
})();
