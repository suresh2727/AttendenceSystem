var btn = document.getElementById("btn-location");

function gotLocation(position) {
  let leti = position.coords.latitude;
  let lon = position.coords.longitude;
}

function failedToGet() {
  alert("Allow Location");
}
setTimeout(() => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
}, 500);

