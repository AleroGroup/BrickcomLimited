<template>
  <div class="home">
    <header-main />
<!--  -->
   <v-content class="my-9">
      <!-- Web  -->
     <v-flex xs12 hidden-sm-and-down id="web">
       <v-layout row justify-center align-center>
         <v-flex xs4 class="ma-3 mr-8">
           <span class="caption mb-4 grey--text">Electronic security systems solutions </span>
           <h1 class="display-2 mt-3 font-weight-bold blue--text">Our Story</h1>
           <h3 class=" headline secondary--text mb-4 mt-4">We are highly qualified in electronic security systems, </h3>
           <p>
              Brickcom Logistics Limited (BLL) is a security company bringing together the skills, knowledge and experiences in the electronic security industry.
              We are Systems Integrators, consultants, trainers, evaluators and researchers; assisting organizations to
              employ effective security solutions so as to minimize crime against people, assets and intellectual property;
              and therefore reduce the financial impact on business.

           </p>
         </v-flex>
         <div class="ma-3">
           <img src="../assets/image_picture.svg" alt="">
           </div>
       </v-layout>
     </v-flex>

     <!-- Mobile  -->
     <v-flex xs12 md6 hidden-md-and-up id="mobile">
          <v-layout column justify-center align-center>
            <div class="ma-3">
              <img width="300" src="../assets/image_picture.svg" alt="">
            </div>
            <div class="pa-4">
           <span class="body-2">Vitae urna diam urna</span>
              <h1 class="display-2 font-weight-bold blue--text">Lorem ipsum dolor.</h1>
              <h3 class=" headline secondary--text mb-4 mt-4">consectetur adipiscing elit. </h3>
               <p>
              Brickcom Logistics Limited (BLL) is a security company bringing together the skills, knowledge and experiences in the electronic security industry.
              We are Systems Integrators, consultants, trainers, evaluators and researchers; assisting organizations to
              employ effective security solutions so as to minimize crime against people, assets and intellectual property;
              and therefore reduce the financial impact on business.
           </p>
            </div>
       </v-layout>
     </v-flex>
   </v-content>

<!--  -->
 <v-content id="service" style="background-color:#FFFBED" class="my-10">
      <!-- Web  -->
     <v-flex xs12 hidden-sm-and-down id="web">
       <v-layout column justify-center align-center pa-5>
        <p class="display-1 _services">Our Services</p>
          <v-layout row justify-center style="width:100vw" mb-3>
            <v-card class="mt-5 pl-8" flat color="transparent" v-for="item in items" :key="item.id">
                <img class="ml-3" :src="item.icon">
                <v-card-title class="title">
                   {{ item.title}}
                </v-card-title>
                <v-card-text style="width:18vw">
                   {{ item.description}}
                </v-card-text>
            </v-card>
          </v-layout>
       </v-layout>
     </v-flex>

     <!-- Mobile  -->
     <v-flex xs12 md6 hidden-md-and-up id="mobile">
         <v-layout column justify-center align-center pa-5>
        <p class="display-1 _services">Our Services</p>
          <v-layout row justify-center style="width:100vw" mb-3>
            <v-card class="mt-5 pl-8" flat color="transparent" v-for="item in items" :key="item.id">
                <img class="ml-3" :src="item.icon">
                <v-card-title class="title">
                   {{ item.title}}
                </v-card-title>
                <v-card-text style="width:80vw">
                   {{ item.description}}
                </v-card-text>
            </v-card>
          </v-layout>
       </v-layout>
     </v-flex>
   </v-content>

<!--  -->
 <v-content id="gallery" class="my-12">
      <!-- Web  -->
     <v-flex xs12 hidden-sm-and-down id="web">
        <v-layout column justify-center align-center pa-5>
        <p class="display-1 _services">Gallery</p>
          <v-layout justify-center row mb-3 mt-3 ml-3>
            <!-- <v-card class="mt-5 pl-4" flat color="transparent" v-for="item in images" :key="item.id">
                <img class="ml-3" :src="item.icon">
            </v-card> -->
              <carousel
              :perPage=7
              :perPageCustom="[[768, 3], [1024, 5]]"
              :scrollPerPage='true'
              :navigationEnabled='false'
              :paginationEnabled='true'
              :navigationPreviousLabel='true'
              :autoplay='true'
              :autoplayTimeout='1700'
              :speed='20'
              style="width:90vw"
              >
                <slide v-for="item in images" :key="item.id">
                  <img width="250" height="250" class="" :src="item.icon">
                   <!-- Slide 1 Content -->
                </slide>
              </carousel>
          </v-layout>
       </v-layout>
     </v-flex>
     <!-- Mobile  -->
     <v-flex xs12 hidden-md-and-up id="mobile">
          <v-layout column align-center>
            <p class="display-1 _services ">Gallery</p>
              <v-layout justify-center align-center ml-12>
              <carousel
              :perPage=1
              :scrollPerPage='true'
              :navigationEnabled='false'
              :paginationEnabled='true'
              :autoplay='true'
              :autoplayTimeout='2700'
              :speed='20'
              style="width:100vw"
              >
                <slide v-for="item in images" :key="item.id">
                  <img width="320" height="320" class="" :src="item.icon">
                   <!-- Slide 1 Content -->
                </slide>
              </carousel>
          </v-layout>
       </v-layout>
     </v-flex>
   </v-content>

<!--  -->
 <v-content class="my-10" id="contacts" style="background-color:#CC3300">
      <!-- Web  -->
     <v-flex xs12 hidden-sm-and-down id="web" class="ml-8">
       <v-layout row wrap justify-space-around justify-center align-center pa-7>
        <v-flex xs8 md5 class="mr-4">
            <p class="display-3 font-weight-bold white--text">" We ensure high standards and
            excellence in security are maintained all the time "</p>
        </v-flex>

        <v-flex xs6 class="ml-12 pa-6">
          <v-layout column justify-center>
          <strong class="display-1 font-weight-medium white--text">Get a Service</strong>
            <small class="body-1 font-weight-normal white--text ml-1">Send a request</small>
            <form>
              <v-card class="mt-6" flat color="transparent" width="500">
                <v-text-field
                  color="white"
                  label="Name"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                  <v-text-field
                  color="white"
                  label="Phone number"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                  <v-text-field
                  color="white"
                  label="Email"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                 <v-textarea
                  color="white"
                  label="How can we help you?"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-textarea>
                <v-btn color="#1F1C3A"
                  large
                  rounded
                  width="150"
                  class="ml-3 mt-4"
                  dark
                >
                  submit
                </v-btn>
              </v-card>
            </form>
          </v-layout>
        </v-flex>
       </v-layout>
     </v-flex>

     <!-- Mobile  -->
     <v-flex xs12 hidden-md-and-up id="mobile">
        <!-- <p class="display-2 font-weight-bold white--text pa-5"> ' Lorem ipsum dolor sit amet, consectetur '</p>
        <v-divider/> -->
         <v-layout column justify-center mt-3 pa-4>
          <strong class="display-1 font-weight-medium white--text">Get a Service</strong>
            <small class="body-1 font-weight-normal white--text ml-1">Send a request</small>
            <form>
              <v-card class="mt-6" flat color="transparent" width="500">
                <v-text-field
                  color="white"
                  label="Name"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                  <v-text-field
                  color="white"
                  label="Phone number"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                  <v-text-field
                  color="white"
                  label="Email"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-text-field>
                 <v-textarea
                  color="white"
                  label="How can we help you?"
                  filled
                  outlined
                  single-line
                  hide-details="auto"
                  class="ma-3"
                ></v-textarea>
                <v-btn color="#1F1C3A"
                  large
                  rounded
                  width="150"
                  class="ml-3 mt-4"
                  dark
                >
                  submit
                </v-btn>
              </v-card>
            </form>
          </v-layout>
     </v-flex>
   </v-content>

  <!--  -->
<section id="get-directions">
 <v-container class="my-12">
      <!-- Web  -->
    <v-layout row justify-center align-center mr-12>
     <v-flex xs12 md9 hidden-sm-and-down id="web" class="mr-12">
      <p class="display-1 ml-3">Get Directions</p>
      <a href="https://www.google.com/maps/search/MWIHOKO,+KIAMBU/data=!3m1!4b1">
        <img width="120%" height="auto" :src="require('@/assets/map.png')" />
      </a>
     </v-flex>

    </v-layout>
     <!-- Mobile  -->
     <v-layout column justify-center align-center>
     <v-flex xs8 hidden-md-and-up id="mobile">
       <v-card flat href="https://www.google.com/maps/search/MWIHOKO,+KIAMBU/data=!3m1!4b1">
       <v-col class="justify-center">
         <v-row class="ma-4">
            <v-icon class='ml-1' color="primary" size="100">mdi-map-marker</v-icon>
         </v-row>
         <v-row>
            <v-btn x-large text dark color="blue" class="text-capitalize font-weight-bold">Get Directions</v-btn>
         </v-row>
          </v-col>
      </v-card>
       </v-flex>
     </v-layout>
   </v-container>
  </section>
  <footer-main />
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
// @ is an alias to /src
import Header from '@/components/header.nav'
import Footer from '@/components/footer.nav'

export default {
  name: 'Home',
  components: {
    'header-main': Header,
    'footer-main': Footer,
    Carousel,
    Slide
  },
  mounted () {

  },
  data () {
    return {
      // eslint-disable-next-line no-labels
      items: [
        {
          id: 1,
          icon: require('../assets/camera_icon.svg'),
          title: 'CCTV Camera',
          description: 'Magna odio morbi pretium amet congue ut diam. dolor sit.'
        },
        {
          id: 2,
          icon: require('../assets/box_icon.svg'),
          title: 'Access Control System',
          description: 'Magna odio morbi pretium amet congue ut diam. dolor sit.'
        },
        {
          id: 3,
          icon: require('../assets/light_icon.svg'),
          title: 'Power Backup & Installation',
          description: 'Magna odio morbi pretium amet congue ut diam. dolor sit.'
        }
      ],
      images: [
        {
          id: 1,
          icon: 'https://i.ibb.co/QYQy82s/IMG-20181109-081410-1.png'
        },
        {
          id: 2,
          icon: 'https://i.ibb.co/MN7Bjcw/IMG-20160918-115245-1.png'
        },
        {
          id: 3,
          icon: 'https://i.ibb.co/0CQMrcN/IMG-20181018-094048-1.png'
        },
        {
          id: 4,
          icon: 'https://i.ibb.co/bb7z916/Whats-App-Image-2020-03-13-at-20-28-11.jpg'
        },
        {
          id: 5,
          icon: 'https://i.ibb.co/j3wRYNq/Whats-App-Image-2020-03-13-at-20-28-11-1.jpg'
        },
        {
          id: 6,
          icon: 'https://i.ibb.co/zZcFWR1/Whats-App-Image-2020-03-13-at-20-28-10.jpg'
        },
        {
          id: 7,
          icon: 'https://i.ibb.co/BK1NQ8S/Whats-App-Image-2020-03-13-at-20-28-06.jpg'
        },
        {
          id: 8,
          icon: 'https://i.ibb.co/k4v1HRW/Whats-App-Image-2020-03-13-at-20-28-05.jpg'
        },
        {
          id: 9,
          icon: 'https://i.ibb.co/nCvy9Nx/Whats-App-Image-2020-03-13-at-20-28-05-1.jpg'
        },
        {
          id: 10,
          icon: 'https://i.ibb.co/DCks3HR/Whats-App-Image-2020-03-13-at-20-28-02.jpg'
        },
        {
          id: 11,
          icon: 'https://i.ibb.co/sQfLqjS/Whats-App-Image-2020-03-13-at-20-28-01.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web:300,400,600,700&display=swap');

._services {
  margin-left:2.3%
  }
  #map {
        height: 600px;
        width: 100vw;
  }
</style>
