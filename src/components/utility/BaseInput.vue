<template>
   <div class="div">
      <label 
      class="size-2xl"
      :for="id">{{ label }}</label>
      <input 
         :id="id"
         :class="[isFocused && 'focused']"
         class="p-2 border-2 border-[#eee] w-full rounded-xl"
         :type="text"
         :placeholder="placeHolder"
         @focus="isFocused = true"
         @blur="isFocused = false"
         @input="handleText"
         :value="value"
         :aria-label="label"
         :aria-describedby="`${id}-description`"
      >
      <div 
         v-if="error" 
         class="h-[10px] mt-1">
         <span class="text-[red]">{{ msg }}</span>
      </div>
   </div>
</template>

<script>
   export default {
      name:'BaseInput',
      props: {
         id: String,
         label:String,
         text: String,
         placeHolder: String,
         value: [String , Number],
         error: {
            type: Boolean,
            default: false,
         },
         msg: {
            type: String,
            msg: '',
         }
      },
      data(){
         return {
           isFocused: false,
         }
      },
      methods: {
         handleText(e){
           this.$emit('update:modelValue', e.target.value )
         }
      }
   }
</script>

<style scoped>
.focused{
   outline: 2px solid #414066;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, .3);
}
</style>