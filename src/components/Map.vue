<template>
  <div class="full_div">
  <div class="pseudo" v-if="!pseudoStorage">
    <input class="input" v-model="pseudo" v-on:keyup.enter="input" placeholder="Pseudo">
  </div>
    <l-map id="map" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" ></l-tile-layer>
      <Mark v-for="device in otherMarker" :key="device.adrDevice" :localisation="device"></Mark>
    </l-map>
  </div>
</template>

<script>
import axios from "axios";
import uuid from "uuid/v1";
import Vue from "vue";
import moment from "moment";
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
    firstPost: true,
<<<<<<< HEAD
    userIcon: L.icon({
      iconUrl: "../assets/user-marker.png",
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    }),
=======
    pseudo: "",
>>>>>>> b516a03bd6cea062a2cfb07e3534ec401971683a
    otherMarker: [],
    cordova: Vue.cordova,
    loadedOwn: false,
    loadedOther: false,
    ownMarker: {},
    zoom: 14.4,
    uuid: "",
    center: L.latLng(47.218371, -1.553621),
    pseudoStorage: false,
    url:
      "https://api.mapbox.com/styles/v1/clusson/cjf9cr2wz4c8e2qqfbyjqm5sl/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2x1c3NvbiIsImEiOiJjamY5Y2o2NmwxaHl1MnhtbXl0ejdsMG10In0.t5OT9RxZcRdtmE_3a19tag"
  }),

  methods: {
    input() {
      Vue.localStorage.set("Pseudo", this.pseudo);
      Vue.localStorage.set("uuid", uuid());
      this.pseudoStorage = true;
      this.run();
    },
    run() {
      this.geoloc();
      this.loadData();
      setInterval(
        function() {
          this.geoloc();
          this.loadData();
          this.firstPost = false;
        }.bind(this),
        5000
      );
    },
    geoloc() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.ownMarker = {
            adrDevice: Vue.localStorage.get("uuid"),
            pseudo: Vue.localStorage.get("Pseudo"),
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            date: moment().format()
          };
        });
      } else {
        if (!Vue.cordova.geolocation) {
          window.alert("Vue.cordova.geolocation not found !");
          return;
        }
        Vue.cordova.geolocation.getCurrentPosition(position => {
          this.ownMarker = {
            adrDevice: Vue.localStorage.get("uuid"),
            pseudo: Vue.localStorage.get("Pseudo"),
            position: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            date: moment().format()
          };

          this.loadedOwn = true;
        });
      }
    },
    loadData() {
      fetch("https://sun7gateway.prayfornetoun.me/localisation")
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log("get done");
          this.otherMarker = result;
        });
      if (!this.firstPost) {
        fetch("https://sun7gateway.prayfornetoun.me/localisation", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.ownMarker)
        }).then(response => {
          console.log(response);
        });
      }
    }
  },

  created: function() {
    if (Vue.localStorage.get("Pseudo")) {
      this.pseudoStorage = true;
      this.run();
    }
  }
};
</script>
