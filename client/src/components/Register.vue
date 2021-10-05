<template>
  <div>
    <h1>Register</h1>
    <div>
    <label for="email">Email:</label>
    <input type="email" 
    name="email"
    v-model="email"
    placeholder="email ">
    </div>
    <div>
    <label for="password">Password:</label>
    <input type="password" 
    name="password"
    v-model="password"
    placeholder="password ">
    </div>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data() {
    return {
        email: '',
        password: '',
    };
  },
  methods: {
      async register() {
        await AuthenticationService.register({
              email : this.email,
              password : this.password
          });
      }
  },
};
</script>

