<template>
    <div>
      <h1>{{ value.questionText }}</h1>
        <select v-if="value.questionType === 'Select'" v-model="answerVal">
          <option v-for="questionOption in value.questionOptions" :value="questionOption" v-bind:key="questionOption">{{questionOption}}</option>
        </select>
        <input v-if="value.questionType === 'Number'" v-model="answerVal" placeholder="Number required">
        <input v-if="value.questionType === 'Freeform'" v-model="answerVal" placeholder="Entry Required">
    </div>
</template>

<script>
export default {
  name: 'QuestionDisplay',
  props: {
    value: Object
  },
  data() {
    return{
      answerVal: null
    }
  }
}
</script>

<style scoped>

</style>