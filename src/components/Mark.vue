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
  props: ["user", "localisation"],
  data: () => ({
    position: {},
    userIcon: {}
  }),
  created() {
    this.position = this.localisation.position;
  }
};
</script>
