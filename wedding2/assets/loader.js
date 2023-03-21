function lazyLoad(url, hash, next) {
  var loaded = false;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url + "?" + hash;
  script.onload = next;
  script.onreadystatechange = function () {
    if (!loaded && (this.readyState == 'loaded' || this.readyState == 'complete')) {
      loaded = true;
      next();
    }
  };
  document.getElementsByTagName('body')[0].appendChild(script);
}
function fetchUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.response));
      }
    }
  };
  xhr.open('GET', url);
  xhr.send();
}