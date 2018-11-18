<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'meetups',
  created() {
    this.fetchMeetups();
  },
  computed: {
    ...mapState({
      meetups: state => state.meetups.data,
    }),
  },
  methods: {
    ...mapActions(['fetchMeetups']),
  },
};
</script>

<template lang="pug">
div
  h1 Hello!
  div(v-if="meetups.length")
    p Here are the meetups:
    div.meetups-list
      div.meetup(v-for="meetup in meetups")
        div {{meetup._id}}
        div {{meetup.name}}
        div {{meetup.location}}
</template>

<style>
.meetups-list {
  display: flex;
}

.meetup {
  margin: 30px;
}
</style>
