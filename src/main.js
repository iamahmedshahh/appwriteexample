import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Client, Account, Functions} from 'appwrite';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const client = new Client();

const vuetify = createVuetify({
    components,
    directives,
  })

client
    .setEndpoint('https://helsinki.cakeshop.dev/v1')
    .setProject('651b1911cc85641c6855');

export const account = new Account(client);
export { ID } from 'appwrite';


createApp(App).use(vuetify).mount('#app')
