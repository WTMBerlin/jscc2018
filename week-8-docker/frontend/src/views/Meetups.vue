<script>
import { mapActions, mapState } from 'vuex';
import MeetupCard from '@/components/MeetupCard.vue'

export default {
  name: 'meetups',
  created() {
    this.fetchMeetups();
  },
  components: {
    MeetupCard
  },
  computed: {
    ...mapState({
      meetups: state => state.meetups.data,
      likes: state => state.meetups.likes
    }),
  },
  methods: {
    ...mapActions(['fetchMeetups', 'addLikes'])
  },
};
</script>

<template lang="pug">
div
  h1 Hello!
  button(@click="addLikes") Like!
  div Likes: {{likes}}
  div(v-if="meetups.length")
    p Here are the meetups:
    div.meetups-list
      div.meetup(v-for="meetup in meetups")
        meetup-card(:data="meetup" key="meetup._id")
</template>

<style>
.meetups-list {
  display: flex;
}

.meetup {
  margin: 30px;
}
</style>
