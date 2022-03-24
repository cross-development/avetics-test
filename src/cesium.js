import model from "./19_rue_Marc_Antoine_Petit.gltf";

window.CESIUM_BASE_URL = "/static/";

import {
  Ion,
  Math,
  Viewer,
  Transforms,
  Cartesian3,
  Model,
  HeadingPitchRoll,
} from "cesium";
import "cesium/Widgets/widgets.css";
import "./main.css";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2YmFmMjEyMy1iMWQxLTQ0NmMtOWM1OS0wN2FlMzIzYTVmNDUiLCJpZCI6ODY5NTYsImlhdCI6MTY0ODEyNDQyNn0.z52C2UINdoX5bIJ4ZywEPDJ7y7DJGVDYjsfKmxI7TMk";

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer("cesiumContainer", {
  infoBox: false,
  selectionIndicator: false,
  shadows: true,
  shouldAnimate: true,
});

const cesium = {
  createModel({ lon, lat, rad }) {
    viewer.entities.removeAll();

    const position = Cartesian3.fromDegrees(lon, lat, 0);
    const heading = Math.toRadians(rad);
    const pitch = 0;
    const roll = 0;
    const hpr = new HeadingPitchRoll(heading, pitch, roll);

    const orientation = Transforms.headingPitchRollQuaternion(position, hpr);

    const entity = viewer.entities.add({
      name: "19 rue Marc Antoine Petit",
      position: position,
      orientation: orientation,
      model: {
        uri: model,
        minimumPixelSize: 128,
        maximumScale: 20000,
      },
    });

    viewer.trackedEntity = entity;
  },
};

export default cesium;
