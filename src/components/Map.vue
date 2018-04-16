<template>
  <div class="full_div">
    <l-map id="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
      <Mark v-if="loadedOwn" :localisation="ownMarker"></Mark>

        <Mark v-for="device in otherMarker" :key="device.adrDevice" :localisation="device"></Mark>

    </l-map>
  </div>
</template>

<script>
import axios from "axios";
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
    otherMarker: [],
    cordova: Vue.cordova,
    loadedOwn: false,
    loadedOther: false,
    ownMarker: {},

    zoom: 14.4,
    center: L.latLng(47.218371, -1.553621),
    url:
      "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag"
  }),

  methods: {
    loadData() {
      fetch("https://sun7gateway.prayfornetoun.me/localisation")
        .then(response => {
          return response.json();
        })
        .then(result => {
          this.otherMarker = result;
          console.log(this.otherMarker);
          console.log(this);
        });
    }
  },

  created: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.ownMarker = {
          pseudo: "You",
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          adrDevice: "You"
        };
        this.loadedOwn = true;
      });
    } else {
      if (!Vue.cordova.geolocation) {
        window.alert("Vue.cordova.geolocation not found !");
        return;
      }
      Vue.cordova.geolocation.getCurrentPosition(position => {
        this.ownMarker = {
          adrDevice: "You",
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          pseudo: "You"
        };
        this.loadedOwn = true;
      });
    }
    this.loadData();
    setInterval(
      function() {
        this.loadData(this);
      }.bind(this),
      30000
    );
  }
};
</script>
