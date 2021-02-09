<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <QuestionDisplay questionText="No. of Employees is fewer than 250 FTE?" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import QuestionDisplay from './components/QuestionDisplay.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    QuestionDisplay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
