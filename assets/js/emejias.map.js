function initMap() {

  var emejias  = {lat: 16.921569, lng: -89.897264};
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: emejias,
    scrollwheel: false,
    zoom: 15,
    drag: false
  });
  // Create a marker and set its position.
  var marker = new google.maps.Marker({
      map: map,
      position: emejias,
      title: 'Elepet'
  });


//globo de informacion del marcador
  var popup = new google.maps.InfoWindow({
    content: 'Visítanos en emejias'});
  popup.open(map, marker);

  var styleArray = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#f5401c"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#ed2e0d"},{"weight":"3"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#696363"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"color":"#303030"},{"weight":"0.50"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#d70f0f"},{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#e17c71"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#969696"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#882525"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"off"},{"color":"#f52020"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ec564c"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fb5118"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f74b1c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#f89988"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"color":"#5d5d5d"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e8b4b4"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#6b6464"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cfeae9"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c6dadc"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#7d93a1"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"2.00"}]}];

  map.setOptions({
      styles: styleArray,
      draggable: false
  });
}
 