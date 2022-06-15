<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.log("BaseUrl"+process.env.VUE_APP_BASE_URL);
  }
}
</script>

<style>

</style>
