<template>
    <div id="header">
    <!-- Website version -->
         <v-flex id="home" xs12 hidden-sm-and-down>
             <v-img :src="require('../assets/nav-header.png')">
             <v-app-bar
             color="transparent"
             dark
            flat
            >
            <img src="../assets/logo.svg" style="margin-top:98px!important;margin-left:50px!important">
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
                    <v-btn color="text" outlined href="#contacts">Contact</v-btn>
                 </p>
                 <p class="ma-1">
                    <v-btn color="secondary" text href="#" class="caption font-weight-bold text-capitalize text-title">Open now
                        <v-icon color="text">mdi-menu-down</v-icon>
                    </v-btn>
                </p>
             </v-layout>
            </v-app-bar>
             <v-layout class="box">
                 <v-flex md7>
                     <div class="display-3 font-weight-bold text-title">Safe, Secure, Service </div>
                 </v-flex>
            </v-layout>
             </v-img>
             <!-- Main title -->
        </v-flex>

        <!-- Mobile Version -->
        <v-flex id="home"  xs12 hidden-md-and-up>
             <v-img :src="require('../assets/nav-header-mobile.png')">
             <v-app-bar
             color="transparent"
             dark
            flat
            >
            <img width="100" src="../assets/logo.svg" style="margin-top:90px!important;">
            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
               <v-layout row justify-end>
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                     icon
                     v-on="on"
                    >
                        <v-img class="ma-8 ml-3" :src="require('../assets/images/icons/menu icon.svg')"></v-img>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in items"
                        :key="index"
                        :href="item.link"
                    >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
             </v-layout>
            </v-app-bar>
             <v-layout>
                 <v-flex xs12 md6>
                     <div class="box2 display-3 text-title">Safe, Secure, Service </div>
                 </v-flex>
            </v-layout>
             </v-img>
             <!-- Main title -->
        </v-flex>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { link: '#service', title: 'Our Services' },
      { link: '#gallery', title: 'Gallery' },
      { link: '#contacts', title: 'Get a Service' },
      { link: '#get-directions', title: 'Get Directions' }
    ]
  })
}
</script>

<style>
.v-btn--outlined {
    border-color: #CC3300 !important;
    border-width: 2px !important;
}
.box {
    display: -webkit-flex, flex, -moz-flex;
    margin-top: 16%;
    margin-left: 10%;
}
.box2 {
    display: -webkit-flex, flex;
    margin-top: 35%;
    margin-left: 16%;
}
.text-title {
    color: #CC3300;
}
</style>
