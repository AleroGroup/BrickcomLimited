import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '../sass/variables.scss'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FFCC00',
        secondary: '#CC3300',
        accent: '#FFEB99',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        text: '#1F1C3A',
        blue: '#262AA3'
      }
    }
  }
})
