<template>
  <div  class="full_div">
    <l-map id="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
      <Mark></Mark>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Mark from "./Mark";
import "../styles/map.css";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    Mark
  },
  data() {
    return {
      zoom: 14.4,
      center: L.latLng(47.218371, -1.553621),
      url:
        "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag"
    };
  }
};
</script>
