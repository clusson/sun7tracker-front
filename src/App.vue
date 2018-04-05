<template>
<div id="app">
      <Map class="full_div"></Map>
</div>
</template>

<script>
import Map from "./components/Map";
import "./styles/map.css";
export default {
  name: "app",
  components: {
    Map
  }
};
</script>

<style>
.leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}
</style>

