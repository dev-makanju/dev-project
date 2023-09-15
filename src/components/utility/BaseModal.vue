<template>
   <div class="flex items-center justify-center h-[100%] bg-[#242222b7] w-full">   
      <div class="bg-[#fff] w-1/5 h-2/5 flex flex-col drop-shadow-sm rounded-lg">
         <span class="flex items-center justify-end  p-4 right-0">
            <font-awesome-icon 
            @click="handleClose"
            class="mb-5 text-2xl c-tst cursor-pointer" :icon="['fa', 'times']" /> 
         </span>
         <div class="flex flex-col items-center justify-center w-full">    
            <font-awesome-icon class="text-7xl mb-5 text-[green]" :icon="['fa', 'circle-check']" />
            <h1 class="text-4xl font-popins font-bold">Success</h1>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name:'AppModal',
      methods: {
         handleClose(){
            this.$emit('close')
         }
      }
   }
</script>
