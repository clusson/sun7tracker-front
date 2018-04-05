<template>
  <div>
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
      <l-marker :lat-lng="marker">
        <l-popup :content="popup"></l-popup>>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
export default {
  name: "map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 14.4,
      center: L.latLng(47.218371, -1.553621),
      url:
        "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag",
      marker: L.latLng(47.206078, -1.538607),
      popup: "Campus HEP"
    };
  }
};
</script>
