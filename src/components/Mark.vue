<template>
<div>
  <l-marker :key="1" :lat-lng="localisation.position">
        <l-popup :content="localisation.name"></l-popup>>
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
  data: () => ({})
};
</script>