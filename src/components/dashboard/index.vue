<template>
   <div>  
      <div class="h-screen grid grid-rows md:grid-cols-[400px_minmax(900px,_1fr)]">
         <div class="border-[#eee] p-2">
            <div class="flex  items-center justify-between cursor-pointer">
               <h1 class="text-3xl font-bold pt-5 pb-3">Your Task</h1>
               <p class="text-[#e74e3c] font-bold">log out</p>
            </div>
            <div class="mt-4" v-for="(task, index) in tasks" :key="index">
               <task :task="task"/>
            </div>
         </div>
         <div>
            <dashboard/>
         </div>
      </div>
   </div>
</template>

<script>
   import Dashboard from '../dashboard/part/Dashboard.vue'
   import Task from './part/Task.vue'

   
   export default {
      name:'indexDashboard',
      components: {
         Task,
         Dashboard,
      },
      data(){
         return {
            tasks: [
              {
                 title: 'Makanju',
                 createdAt: '01/02/34'
              },
              {
                 title: 'Makanju',
                 createdAt: '01/02/34'
              },
              {
                 title: 'Makanju',
                 createdAt: '01/02/34'
              },
              {
                 title: 'Makanju',
                 createdAt: '01/02/34'
              },
            ]
         }
      }
   }
</script>
