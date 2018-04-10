<template>
<div>
  <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.position">
        <l-popup :content="marker.name"></l-popup>>
  </l-marker>
  </div>
</template>

<script>
import { LMarker, LPopup } from "vue2-leaflet";

const markers = [
  { id: 1, position: { lat: 47.206078, lng: -1.538607 }, name: "Campus HEP" },
  { id: 2, position: { lat: 47.215601, lng: -1.557034 }, name: "Fût à Mesure" }
];

export default {
  name: "Mark",
  components: {
    LMarker,
    LPopup
  },
  data() {
    return {
      markers
    };
  }
};
</script>
