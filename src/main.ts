import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router/index';
import { createI18n } from 'vue-i18n';
import AR from './locale/ar.json';


const i18n = createI18n({
    locale:'EN',
    messages:{
        AR:AR
    }
  })
  
  
const pinia = createPinia();

const app = createApp(App);


app.use(pinia);

app.use(i18n)

app.use(router)

app.mount('#app')


