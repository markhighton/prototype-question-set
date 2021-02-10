<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{/*<HelloWorld msg="Welcome to Your Vue.js App"/>*/}}
    <QuestionDisplay 
    v-for="question in questions" 
    :value="question" 
    :index="question.id"
    :key="question.id" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import QuestionDisplay from './components/QuestionDisplay.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    QuestionDisplay
  },
  data () {
    return {
      questions: [
        {
          id: 0,
          questionText: "No. of Employees is fewer than 250 FTE",
          questionOptions: ["True", "False"],
          questionType: "Select"
        },
        {
          id: 1,
          questionText: "No. of Employees?",
          questionOptions: 0,
          questionType: "Number"
        },
        {
          id: 2,
          questionText: "Turnover (less than €50m) OR Balance Sheet (less than €43m)",
          questionOptions: "",
          questionType: "Freeform"
        },
      ]
    }
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
