<template>
  <NavBar />
  <RouterView />
</template>
<script>
import NavBar from './components/common/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
