<template>
  <div>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 13,
      center: L.latLng(47.41322, -1.219482),
      url:
        "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag",
      marker: L.latLng(47.41322, -1.219482)
    };
  }
};
</script>
