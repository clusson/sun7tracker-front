<template>
<div>
  <l-marker :icon="userIcon" :key="localisation.adrDevice" :lat-lng="position">
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
    if (this.user) {
      this.userIcon = L.icon({
        iconUrl: "../assets/user-marker.png"
      });
    }
    this.position = this.localisation.position;
  }
};
</script>
