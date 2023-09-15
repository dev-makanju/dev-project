<template>
   <div class="w-full border-[.78px] flex justify-between cursor-pointer hover:bg-[#94a3b8] items-center p-2 rounded-sm">
      <div>
         <h4 class="font-poppins font-semibold">{{ task.title }}</h4>
         <p>{{ task.createdAt }}</p>
      </div>
      <div class="bg-[#3f6212] p-3 rounded-xl text-[#fff] text-2xl">
         <h4>F</h4>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'TaskApp',
      props: {
         task: Object,
      }
   }
</script>

<style lang="scss" scoped>

</style>