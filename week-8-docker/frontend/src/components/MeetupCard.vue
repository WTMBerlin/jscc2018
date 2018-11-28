<script>
export default {
  name: 'meetupCard',
  props: ['data']
}
</script>

<template lang="pug">
div.wrapper
  div.id {{data._id}}
  div.name {{data.name}}
  div.location {{data.location}}
</template>

<style>
.wrapper {
  background-color: azure;
  padding: 20px;
  border: 1px solid;
  border-radius: 30px;
}

.id {
  font-size: 10px;
}

.location {
  background-color: gray;
  border-radius: 5px;
  color: #fff;
  margin: 5px;
  padding: 3px;
}
</style>
