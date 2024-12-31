<template>
  <div class="map">
    <div class="map-size">
      <LMap
        ref="map"
        :zoom="zoom"
        :center="[23.015, 120.2742728477136]"
        :use-global-leaflet="false"
      class="map-body">
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="[23.0143, 120.27385]">
          <LPopup>Hello World</LPopup>
          <LIcon :icon-url="iconUrl" :icon-size="iconSize"></LIcon>
        </LMarker>
      </LMap>
    </div>
  </div>
</template>

<script setup>
const zoom = ref(15);
const iconWidth = ref(21);
const iconHeight = ref(36);
const iconUrl = computed(() => `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);
</script>

<style lang="scss" scoped>
.map {
  padding: 60px;
  background: rgb(236, 238, 228);
}
.map-size {
  height: 500px;
}
.map-body {
  border-radius: 20px;
  border: 2px solid #FFF;
}
</style>