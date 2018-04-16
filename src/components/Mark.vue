<template>
<div>
  <l-marker :key="localisation.adrDevice" :lat-lng="position">
        <l-popup :content="localisation.pseudo"></l-popup>>
  </l-marker>
  </div>
</template>

<script>
import { LMarker, LPopup } from "vue2-leaflet";
export default {
  name: "Mark",
  components: {
    LMarker,
    LPopup
  },
  props: ["localisation"],
  data: () => ({
    position: {}
  }),
  created() {
    this.position = this.localisation.position;
    console.log(this.localisation.position.lat, this.localisation.position.lng);
  }
};
</script>
