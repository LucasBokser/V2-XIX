import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'bootstrap';
import './assets/app.scss';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 import Vuesax from 'vuesax'
 import 'vuesax/dist/vuesax.css'
window.axios = require('axios');
import Carousel3d from 'vue-carousel-3d';
import loader from "vue-ui-preloader";
import VueI18n from 'vue-i18n' // Import de vue-i18n

Vue.use(VueI18n); // Utilisation de VueI18n dans Vue
Vue.use(loader);
Vue.use(Carousel3d);
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Vuesax)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Création d'une instance i18n exportée pour être utilisée partout dans Vue
// export const i18n = new VueI18n({
//     locale: 'en',
//     fallbackLocale: 'en'
// });
function loadLocaleMessages () {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
})

new Vue({
    i18n, // Utilisation de i18n
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App),
}).$mount('#app')
