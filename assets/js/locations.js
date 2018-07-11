// places variables and gps locations
let Nigeria = { lat: 9.082, lng: 8.6753 };
let Lagos = { lat: 6.465422, lng: 3.406448 };
let abuja = {
  lat: 9.072264,
  lng: 7.491302
};
let Kaduna = {
  lat: 10.609319,
  lng: 7.429504
};
let PortHarcouth = { lat: 4.8156, lng: 7.0498 };
let Ogun = { lat: 6.9075, lng: 3.5813 };
let Rivers = { lat: 4.8581, lng: 6.9209 };

initMap = () => {
  let options = {
    zoom: 6,
    center: Nigeria
  };
  let map = new google.maps.Map(
    document.getElementById("map-container"),
    options
  );

  // function to add new markers immediately
  addNewMarker = props => {
    let marker = new google.maps.Marker({
      position: props.Coordinates,
      map: map
    });

    // variable infowindow opens the location details on click
    let infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    // event listener for the infowindow on click
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  };

  // markers array which will contain all the locations to be looped through
  let markers = [
    {
      Coordinates: Nigeria,
      content: "<h4> Nigeria</h4>"
    },
    {
      Coordinates: Lagos,
      content: "<h4>Lagos State</h4>"
    },
    {
      Coordinates: Ogun,
      content: "<h4>Ogun State</h4>"
    },
    {
      Coordinates: Rivers,
      content: "<h4>River State</h4>"
    },
    {
      Coordinates: PortHarcouth,
      content: "<h4>Port Harcourt State</h4>"
    },
    {
      Coordinates: abuja,
      content: "<h4>Abuja State</h4>"
    },
    {
      Coordinates: Kaduna,
      content: "<h4>Kaduna State</h4>"
    }
  ];
  // calling the add new marker function via loop

  for (let i = 0; i < markers.length; ++i) {
    addNewMarker(markers[i]);
  }
};
