<template>
    <div>
        <h1>{{ questionText }}</h1>
    </div>
</template>

<script>
export default {
  name: 'QuestionDisplay',
  props: {
    questionText: String
  }
}
</script>

<style scoped>

</style>