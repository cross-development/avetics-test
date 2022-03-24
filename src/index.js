import cesium from "./cesium";

const defCoords = {
  lon: 33.148699713918525,
  lat: 48.652061888671845,
  rad: 0,
};

const refs = {
  searchForm: document.querySelector(".coordsForm"),
};

document.addEventListener("DOMContentLoaded", () => {
  cesium.createModel(defCoords);
});

const handleFormSubmit = (e) => {
  e.preventDefault();

  const { elements } = e.currentTarget;

  const coords = {
    [elements.lon.name]: parseFloat(elements.lon.value) || defCoords.lon,
    [elements.lat.name]: parseFloat(elements.lat.value) || defCoords.lat,
    [elements.rad.name]: parseFloat(elements.rad.value) || 0,
  };

  cesium.createModel(coords);
};

refs.searchForm.addEventListener("submit", handleFormSubmit);
