<template>   
   <dashboard/>
   <div v-if="showModal">
       <app-modal @close="closePopUp" class="fixed top-0"/>
   </div>
</template>

<script>
   import Dashboard from '../components/dashboard/index.vue';
   import AppModal from '../components/utility/BaseModal.vue';

   export default {
      name:'DashboardView',     
      components: {
        Dashboard,
        AppModal,
      },
      data(){
        return {
          showModal: true,
        }
      },
      methods: {
         closePopUp(){
            this.showModal = false;
         }
      } 
   }
</script>
