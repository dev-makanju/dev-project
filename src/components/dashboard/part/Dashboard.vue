<template>
   <div class="p-4">
      <div class="flex flex-col lg:flex-row gap-4 w-full border-3">
         <div class="bg-primary rounded-lg flex-1 h-[100px] flex items-center">
            <h1 class="text-5xl text-[#fff] font-popins ml-5 mr-2">Hi There</h1>
            <font-awesome-icon 
            class="text-4xl text-[#f5f503]"
            :icon="['fas', 'hand-sparkles']" />
         </div>
         <div class="bg-primary rounded-lg flex-1 h-[100px] flex items-center">
            <h1 class="text-5xl text-[#fff] font-popins ml-5 mr-2">30</h1>
            <p class="text-[#fff] font-popins">Tasks</p>
         </div>
      </div>

      <div>
         <h1 class="text-3xl font-popins pt-5 pb-5">Add Task</h1>
         <app-input 
            :id="'title'" 
            :label= "'Title :'"
            :value="title"
            :text="'text'"
            :placeHolder="'Title'"
            :msg="''"
            v-model="title"
         />
         <label class="pt-2" for="desc">Description :</label>
         <textarea 
            id="desc" 
            class="rounded-xl outline-[#414066] border-2 border-[#eee] p-2 font-popins w-full h-[200px]" 
            cols="30"
            v-model="desc" 
            rows="10">
         </textarea>
         <app-button 
         class="mt-7 mb-3"
         :disabled="loading" 
         :label="'Create Task'" 
         :variant="'primary'"
         @clk="handleSubmit"
      />
      </div>
   </div>
   <app-toast :show="onError" :msg="msg" class="absolute w-full top-0 left-0"/>
</template>

<script>
   import AppInput from '../../utility/BaseInput.vue';
   import AppButton from '../../utility/BaseButton.vue';
   import AppToast from '../../utility/BaseToast.vue';

   export default {
      name:'main-dashbaord',
      components: {
         AppInput,
         AppButton,
         AppToast,
      },
      data(){
         return {
           title: '',
           desc:'',
           onError: false,
           msg:'',
           loading: false,
         }
      },
      methods: {
         handleSubmit(){
            if(this.title === '' || this.desc === ''){
               this.onError = true;
               this.msg = 'Input field cannot be empty';
               return;
            }

            const input = {
               title: this.title,
               desc: this.desc,
            }
            
            //implement Api call
            this.loading = true;
            console.log(input);
         }
      }
   }
</script>
