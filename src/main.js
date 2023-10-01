import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Client, Account} from 'appwrite';
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
    .setEndpoint('https://appwrite143.tokyo.cakeshop.dev/v1')
    .setProject('65140c7226959c374eff'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';


createApp(App).use(vuetify).mount('#app')
