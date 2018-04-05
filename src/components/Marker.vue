<template>
  <l-marker :lat-lng="marker">
        <l-popup :content="popup"></l-popup>>
  </l-marker>
</template>

<script>
import LMarker from "vue2-leaflet";
export default {
  name: "Marker",
  components: {
    LMarker
  },
  data() {
    return {
      marker: L.latLng(47.206078, -1.538607),
      popup: "Campus HEP"
    };
  }
};
</script>
