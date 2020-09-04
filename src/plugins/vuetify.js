import Vue from 'vue';
import Vuetify, { VRow } from 'vuetify/lib';

Vue.use(Vuetify, VRow);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6825c1',
        secondary: '#8d57c6',
        accent: '#8c9eff',
        error: '#b71c1c',
      }
    }
  }
});
