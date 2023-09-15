<template>
   <auth-wrapper class="m-auto mt-5">
      <h1 class="text-primary pt-5 pb-5 font-bold text-2xl font-popins">Register</h1>
      <app-input 
         :id = "'username'" 
         :label = "'Username :'"
         :value = "userName"
         :error = "user.error"
         :text = "'text'"
         :placeHolder="'Enter your username'"
         :msg = "user.msg"
         v-model="userName"
      />

      <app-input 
         class="mt-7"
         :id = "'email'" 
         :label = "'Email :'"
         :value = "email"
         :error = "user.error"
         :text = "'email'"
         :placeHolder="'Enter your username'"
         :msg = "user.msg"
         v-model="email"
      />

      <app-input 
         class="mt-7"
         :id = "password" 
         :label = "'Password :'"
         :text = "'password'"
         :placeHolder="'Enter your password'"
         :value = "password"
         :error = "user.error"
         :msg = "user.msg"
         v-model="userName"
      />
      <app-input 
         class="mt-7"
         :id = "'confpass'" 
         :label = "'Confirm Password :'"
         :text = "'password'"
         :placeHolder="'Confirm your password'"
         :value = "confirmPass"
         :error = "user.error"
         :msg = "user.msg"
         v-model="confirmPass"
      />
      <app-button 
         class="mt-7 mb-3"
         :disabled="false" 
         :label="'Sign In'" 
         :variant="'primary'"
         @clk="handleSubmit"
      />
      <p class="mb-10 text-right">Already have an account? 
      <router-link 
      class="text-primary" 
      :to="{name:'login'}">sign in
      </router-link></p>
   </auth-wrapper>   
</template>

<script>
   import AppButton from '../utility/BaseButton.vue';
   import AppInput from '../utility/BaseInput.vue';
   import AuthWrapper from './part/AuthWrapper.vue';
   
   export default {
      name:'AuthSignup',
      components: {
         AuthWrapper,
         AppInput,
         AppButton,
      },
      data(){
         return {
            userName: '',
            email:'',
            password: '',
            confirmPass: '',
            user: {
               error: false,
               msg: 'invalid input field!',
            }
         }
      },
      methods: {
         handleSubmit(){
            console.log('hello')
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>