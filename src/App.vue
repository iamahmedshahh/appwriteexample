<template>
  <div>
    <p>
      {{ loggedInUser ? `Your UserName is ${loggedInUser.name} and your UserID is ${loggedInUser.id}` : 'Not logged in' }}
    </p>

    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
     
      <button type="button" @click="login(email, password)">Login</button>

      <button type="button" @click="logout">Logout</button>
    </form>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.message }}
    </v-snackbar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from './main.js';

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const name = ref('');
const snackbar = ref({
  show: false,
  message: '',
  color: 'error',
  timeout: 6000, // Snackbar timeout in milliseconds (adjust as needed)
});

const login = async (email, password) => {
  try {
    await account.createEmailSession(email, password);
    loggedInUser.value = await account.get();
    clearSnackbar()
  } catch (error) {
    showSnackbar('Login failed. Please check your credentials.', 'error');
  }
};

// const register = async () => {
//   try {
//     await account.create(ID.unique(), email.value, password.value, name.value);
//     login(email.value, password.value);
//     clearSnackbar()
//   } catch (error) {
//     showSnackbar('Registration failed. User with the same ID may exist.', 'error');

//   }
// };

const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
  // Clear the form fields and error message on logout
  email.value = '';
  password.value = '';
};
const showSnackbar = (message, color) => {
  snackbar.value.message = message;
  snackbar.value.color = color;
  snackbar.value.show = true;
};

const clearSnackbar = () => {
  snackbar.value.show = false;
};
</script>

<style scoped>
.error-popup {
  background-color: #ffcccc;
  padding: 10px;
  border: 1px solid #ff0000;
  color: #ff0000;
  margin-top: 10px;
}
</style>
