<script>
import { required , email  ,minLength } from "vuelidate/lib/validators";

import {mapState , mapActions } from 'vuex'
    export default {
  data() {
    return {
        form: {
            credentials:{
                fullName : null,
                email: null,
                password: null,
            },
        },
      error: null,
      submitted: false,
      callingApi: false
    };
  },
  computed: {
    ...mapState({
      auth: 'auth',

    })
    
  },
  validations: {
    form :{
         credentials:{
            fullName: { required },
            email: { required, email },
            password: { required , minLength: minLength(8)}
    }

    }
   
  
  },
  methods: {
 
    ...mapActions({
      handleRegisterForm: 'auth/registerFormApi' ,
    }),
 
    tryToRegister() {

      this.submitted = true;
      this.$v.form.credentials.$touch();

      if (this.$v.form.credentials.$invalid) {
        return;
      } 


      this.$v.form.credentials.$reset();

      this.callingApi = true  

      this.handleRegisterForm(this.form.credentials)
      .then( (result) => {

      console.log(result)
      this.callingapi = false
      this.error = null
      this.$swal({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              icon: 'success',
              title: 'successfully register',
            });
         this.$router.push({ name: 'login' }) 
         } 
         ).catch( err => {
            this.callingapi = false
           this.error = err.error
      })
    }
  }
};

</script>

<style  scoped>
@import '@/assets/css/login.css';
.is-invalid{
    border: 1px solid #dc3545;
}

.invalid-feedback span{
position: absolute;
    right: 34px;
    top: 10px;
}

</style>

<template>
    <div class="form-body">
        <div class="website-logo">
            <a href="index.html">
                <div class="logo">
                    <img class="logo-size" :src="require(`@/assets/images/logo-light.svg`)" alt="">
                </div>
            </a>
        </div>
        <div class="row">
            <div class="img-holder">
                <div class="bg"></div>
                <div class="info-holder">
                    <h3>Get more things done with Loggin platform.</h3>
                    <p>Access to the most powerfull tool in the entire design and web industry.</p>
                     <img class="logo-size" :src="require(`@/assets/images/graphic4.svg`)" alt="">

                </div>
            </div>
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <div class="website-logo-inside">
                            <a href="index.html">
                                <div class="logo">
                                    
                                    <img class="logo-size" :src="require(`@/assets/images/logo-light.svg`)" alt="">
                                    
                                </div>
                            </a>
                        </div>
                        <div class="page-links">
                            <router-link :to="{ name: 'login'}">Login </router-link>
                            <router-link :to="{ name: 'register'}" class="active">Register</router-link>
                            <!-- <a href="login8.html">Login</a><a href="register8.html" class="active">Register</a> -->
                        </div>
                        <form id="register-app" @submit.prevent="tryToRegister">
                            <div class="form-group position-relative mb-4">
                                <input
                                id="name" 
                                type="text"
                                class="form-control"
                                placeholder="Full Name"
                                v-model="form.credentials.fullName"
                                :class="{ 'is-invalid': submitted && $v.form.credentials.fullName.$error }"
                                
                                />
                                <!-- :placeholder="$t('login.fullName')" -->
                                <div v-if="submitted && $v.form.credentials.fullName.$error" class=" invalid-feedback">
                                <span v-if="!$v.form.credentials.fullName.required">required</span>
                                </div>
                            </div>

                            <div class="form-group position-relative mb-4">
                                <input
                                id="email" 
                                type="email"
                                class="form-control"
                                v-model="form.credentials.email"
                                :class="{ 'is-invalid': submitted && $v.form.credentials.email.$error }"
                                
                                />
                                <div v-if="submitted && $v.form.credentials.email.$error" class=" invalid-feedback">
                                <span v-if="!$v.form.credentials.email.required">required</span>
                                <span v-if="!$v.form.credentials.email.email">set valid email</span>
                                </div>
                            </div>
                            <div class="form-group position-relative mb-4">
                                <input
                                id="password" 
                                type="password"
                                class="form-control"
                                v-model="form.credentials.password"
                                :class="{ 'is-invalid': submitted && $v.form.credentials.password.$error }"
                                
                                />
                                <div v-if="submitted && $v.form.credentials.password.$error" class=" invalid-feedback">
                                <span v-if="!$v.form.credentials.password.required">required</span>
                                <span v-if="!$v.form.credentials.password.minLength">8 chart</span>
                                </div>
                            </div>

                            <div class="form-button">
                                <button id="submit" type="submit" class="ibtn">Register</button>
                            </div>
                        </form>
                        <!-- <div class="other-links">
                            <span>Or register with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




