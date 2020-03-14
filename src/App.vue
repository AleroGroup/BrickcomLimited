<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
  }
}
</script>

<style>
  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    color: rgba(255, 255, 255, 0.575) !important;
  }
  .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
    background: rgba(255, 255, 255, 0.13) !important;
  }
  /* .v-label, .theme--light {
    color: rgba(255, 255, 255, 0.685) !important;
  } */
 .VueCarousel-pagination .VueCarousel-dot.VueCarousel-dot--active {
   background-color: #CC3300 !important;
 }
</style>
