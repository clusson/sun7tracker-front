<template>
  <div class="full_div">
    <l-map id="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
      <Mark v-if="loadedOwn" :localisation="ownMarker"></Mark>
      <Mark v-if="loadedOther" v-for="device in otherMarker" :key="device.id" :localisation="device"></Mark>
    </l-map>
  </div>
</template>

<script>
import Vue from "vue";
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
  props: ["Vue"],
  data: () => ({
    cordova: Vue.cordova,
    loadedOwn: false,
    loadedOther: false,
    ownMarker: {},
    otherMarker: {},
    zoom: 14.4,
    center: L.latLng(47.218371, -1.553621),
    url:
      "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag"
  }),
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.ownMarker = {
          id: "You",
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          name: "You"
        };
        this.loadedOwn = true;
      });
    } else {
      if (!Vue.cordova.geolocation) {
        window.alert("Vue.cordova.geolocation not found !");
        return;
      }
      Vue.cordova.geolocation.getCurrentPosition(position => {
        alert(position);
        this.ownMarker = {
          id: "You",
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          name: "You"
        };
        this.loadedOwn = true;
      });
    }
    this.otherMarker = [
      {
        id: 2,
        position: { lat: 47.206078, lng: -1.538607 },
        name: "Campus HEP"
      },
      {
        id: 3,
        position: { lat: 47.215601, lng: -1.557034 },
        name: "Fût à Mesure"
      }
    ];
    this.loadedOther = true;
  }
};
</script>