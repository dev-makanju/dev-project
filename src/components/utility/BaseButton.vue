<template>
   <button
      :class="['p-3 text-center w-full rounded-4xl', variantClass ]"
      :disabled="disabled"
      :aria-disabled="disabled"
      @click="handleClick"
      type="submit"
   >
    {{ label }}
  </button>
</template>

<script>
   export default {
      name:'BaseButton',
      props: {
         label: String,
         variant: {
            type: String,
            default: 'primary',
         },
         disabled: Boolean,
      },
      computed: {
         variantClass(){
            if(this.disabled){
               return  `variant-${this.variant}-disabled`;
            }
            return `variant-${this.variant}`;
         }
      },
      methods: {
         handleClick() {
            this.$emit('clk');
         },
      }
   }
</script>

<style>
   /* variant style */
   .variant-primary {
      background-color: #414066;
      color: #fff;
   }

   .variant-primary-disabled {
      background-color: #414066c3;
      cursor: not-allowed;
   }
   
   .variant-secondary {
      background-color: #4C6640;
      color: #fff;
   }

   .variant-secondary-disabled {
      background-color: #4c6640b4;
      cursor: not-allowed;
   }

</style>