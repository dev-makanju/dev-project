<template>
   <header class="flex justify-between items-center bg-primary p-5">
      <h1 class="font-popins text-4xl text-[#fff]"> {{ returnResponsiveTitle }}</h1>
      <div class="flex items-center">    
         <nav v-if="!isMobile">
            <ul class="flex ">
               <li
                  class="p-4 w-[120px] text-center font-popins rounded-2xl" 
                  v-for="(url , index) in urlDatas " :key="index">
                  <router-link class="text-[#FFFFFF] " :to="{name: url.url}">{{ url.name }}</router-link>
               </li>
            </ul>
         </nav>
         <div class="flex items-center  justify-center bg-[#fff] w-[50px] h-[50px] rounded-full">
            <h1 class="text-2xl font-popins font-bold">MA</h1>
         </div>
         <div v-if="isMobile" class="flex items-center justify-center p-2 rounded-sm">
            <font-awesome-icon
            @click="toggleNav" 
            class="text-4xl text-[#ffff] cursor-pointer"
            :icon="['fas', `${showNav ? 'times': 'hamburger'}`]"/>
         </div>
      </div>
   </header>
   <!-- show on mobile -->
      <div class="bg-primary" v-if="isMobile">
         <div class="flex flex-col" v-if="showNav">    
            <nav>
               <ul class="flex flex-col">
                  <li
                     class="p-4 w-[120px]  font-popins rounded-2xl" 
                     v-for="(url , index) in urlDatas " :key="index">
                     <router-link class="text-[#FFFFFF] " :to="{name: url.url}">{{ url.name }}</router-link>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
</template>

<script>
export default {
   name:'NavBar',
   data(){
      return {
        urlDatas: [
            {
              url: 'login',
              name: 'Login',
            },
            {
              url: 'register',
              name: 'Register',
            },
            {
              url: 'dashboard',
              name: 'Dashboard',
            }
        ],
        isMobile: false,
        showNav: false,
      }
   },
   mounted(){
      this.checkScreenSize();
      addEventListener('resize' , this.checkScreenSize )
   },
   methods: {
      checkScreenSize() {
         this.isMobile = window.innerWidth <= '768'
      },
      toggleNav(){
         this.showNav = !this.showNav
      }
   },
   computed: {
      returnResponsiveTitle() {
         if(this.isMobile){
            return 'Vma'
         }
         return 'VueMadeEasy'
      }
   }
}
</script>
