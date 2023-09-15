<template>
   <div v-if="show" class="p-3 flex border-t-4 border-t-[#525252] justify-between items-center bg-[#fee2e2] h-[70px]">
      <h2 class="text-[#e74e3c] text-sm">Oops! {{ msg }}</h2>
      <div class="p-3">
         <font-awesome-icon 
         class="text-4xl text-[#e74e3c]"
         :icon="['fas', 'exclamation']" />
      </div>
   </div>
</template>

<script>
   export default {
      name:'AppToast',
      props: {
         variant: {
           type: String,
           default: 'default',
         },
         show: Boolean,
         msg: String,
      },
   }
</script>