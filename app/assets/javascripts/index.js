function initMap() {
  const boston= { lat: 42.361145, lng: -71.057083 };
  // debugger
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: boston,
  });
  const marker = new google.maps.Marker({
    position: boston,
    map: map,
  });
}

window.initMap = initMap;

