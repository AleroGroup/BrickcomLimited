<template>
   <v-img :src="require('../assets/nav-header.png')">
    <v-app-bar
    color="transparent"
    dark
    flat
      >
    <img class="mt-6 pt-10" src="../assets/logo.svg">
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-layout row justify-end>
           <p class="ma-1">
               <v-btn color="text " text href="#home">Home</v-btn>
           </p>
            <p class="ma-1">
               <v-btn color="text" text href="#service">Service</v-btn>
           </p>
            <p class="ma-1">
               <v-btn color="text" text href="#gallery">Gallery</v-btn>
           </p>
           <p class="ma-1">
               <v-btn color="text" text href="#get-directions">Get Directions</v-btn>
           </p>
           <p class="ma-1">
               <v-btn color="text" outlined href="#get-directions">Contact</v-btn>
           </p>
           <p class="ma-1">
               <v-btn color="secondary" text href="#get-directions" class="caption font-weight-bold text-capitalize text-title">Open now
                   <v-icon color="text">mdi-menu-down</v-icon>
                </v-btn>
           </p>
        </v-layout>
    </v-app-bar>
        <v-flex xs12 md6 hidden-md-and-down>
            <v-layout class="box">
               <div class="display-4 font-weight-medium text-title">Lorem ipsum </div>
            </v-layout>
        </v-flex>
         <v-flex xs12 md6 hidden-lg-and-up hidden-sm-and-down>
            <v-layout class="box">
               <div class="display-3 font-weight-medium mt-5 text-title">Lorem ipsum </div>
            </v-layout>
        </v-flex>
   </v-img>
</template>

<script>
export default {

}
</script>

<style>
.v-btn--outlined {
    border-color: #CC3300 !important;
    border-width: 2px !important;
}
.box {
    display: -webkit-flex, flex, -moz-flex;
    margin-top: 20%;
    margin-left: 20%;
}
.text-title {
    color: #CC3300;
}
</style>
