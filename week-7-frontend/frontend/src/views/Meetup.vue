<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'meetup',
  created() {
    this.fetchMeetup(this.$route.params.id)
  },
  computed: {
    ...mapState({
      meetup: state => state.meetups.meetup
    }),
  },
  methods: {
    ...mapActions(['fetchMeetup'])
  },
};
</script>

<template lang="pug">
div
  h2.name {{meetup.name}}
  div {{meetup.location}}
</template>

<style>
.name {
  color:rgb(255,20,147);
}
</style>
