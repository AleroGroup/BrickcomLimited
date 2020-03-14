<template>
<div id="footer">
    <v-card color="transparent">
    <!-- Website version -->
         <v-flex xs12 hidden-sm-and-down>
             <v-layout column justify-center>
                 <v-layout row justify-space-around mt-9>
                     <p class="body-1 text-uppercase font-weight-medium white--text">Follow us</p>
                     <div id="social-icons" class="mr-12">
                         <span class="ma-3">
                            <v-btn small icon>
                                <v-img :src="require('../assets/images/icons/facebook.svg')"></v-img>
                            </v-btn>
                         </span>
                         <span class="ma-3">
                            <v-btn small icon>
                                <v-img :src="require('../assets/images/icons/twitter.svg')"></v-img>
                            </v-btn>
                         </span>
                     </div>
                 </v-layout>

                 <v-layout column justify-center pl-10 pr-10>
                      <v-divider color="white"/>
                        <v-layout row mt-5 mx-12>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-6"></div>
                            <v-layout column ml-12 mb-5>
                                <a href="#home" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Home</a>
                                <a href="#service" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Our Services</a>
                                <a href="#gallery" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Gallery</a>
                                <a href="#contacts" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Contact us</a>
                            </v-layout>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <div class="ml-12"></div>
                            <v-layout column mb-6>
                             <p  class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Find us here</p>
                             <small class="white--text">
                                 Windsor House, 5th Floor <br />
                                 House No. 5<br />
                                 Mwihoko, Kiambu<br />
                                <br />
                                <a href="tel:+254722337829">
                                    +254 (0) 722 337829<br />
                                </a>
                                <a href="tel:+254733 940198">
                                    +254 (0) 733 940198<br />
                                </a>
                                 brickcomlogistics@outlook.com<br />
                            </small>
                            </v-layout>
                        </v-layout>
                        <v-divider color="white"/>
                 </v-layout>
                 <v-layout column justify-center align-center mt-5 mb-5>
                    <p href="" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">PRiVACY POLICY</p>
                    <small class="font-weight-medium white--text">© 2019  Brickcom  Logistics Limited</small>
                </v-layout>
             </v-layout>
        </v-flex>
        <!-- Mobile Version -->
        <v-flex xs12 hidden-md-and-up>
                  <v-layout column justify-center align-center>
                     <p class="mt-5 body-1 text-uppercase font-weight-medium white--text">Follow us</p>
                     <div id="social-icons">
                         <span class="ma-3">
                            <v-btn small icon>
                                <v-img :src="require('../assets/images/icons/facebook.svg')"></v-img>
                            </v-btn>
                         </span>
                         <span class="ma-3">
                            <v-btn small icon>
                                <v-img :src="require('../assets/images/icons/twitter.svg')"></v-img>
                            </v-btn>
                         </span>
                     </div>

                 <v-layout column justify-center mt-4>
                      <v-divider width="400" color="white"/>
                        <v-layout column align-center mt-5 mx-auto>
                            <v-layout column align-center mb-5>
                                <a href="#home" class=" pa-2 body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Home</a>
                                <a href="#service" class="pa-2 body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Our Services</a>
                                <a href="#gallery" class="pa-2 body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Gallery</a>
                                <a href="#contacts" class="pa-2 body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Contact us</a>
                            </v-layout>
                            <v-layout column align-center mb-6>
                             <p class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">Find us here</p>
                             <small class="white--text text-center">
                                 Windsor House, 5th Floor <br />
                                 House No. 5<br />
                                 Mwihoko, Kiambu<br />
                                <br />
                                <a href="tel:+254722337829">
                                    +254 (0) 722 337829<br />
                                </a>
                                <a href="tel:+254733 940198">
                                    +254 (0) 733 940198<br />
                                </a>
                                 brickcomlogistics@outlook.com<br />
                            </small>
                            </v-layout>
                        </v-layout>
                        <v-divider width="400" color="white"/>
                 </v-layout>
                 <v-layout column justify-center align-center mt-5 mb-5>
                    <p href="" class="body-2 text-uppercase font-weight-bold white--text" style="text-decoration:none;">PRiVACY POLICY</p>
                    <small class="font-weight-medium white--text">© 2019  Brickcom  Logistics Limited</small>
                </v-layout>
             </v-layout>
        </v-flex>
    </v-card>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style>
#footer {
    background-color: #1F1C3A;
}
</style>
