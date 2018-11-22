import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const ADD_LIKES = 'ADD_LIKES';
const REQUEST_METUP_SUCCESS = 'REQUEST_METUP_SUCCESS';

const state = {
  data: [],
  likes: 0,
  meetup: {}
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },
  [ADD_LIKES](state) {
    state.likes++;
  },
  [REQUEST_METUP_SUCCESS](state, data) {
    state.meetup = data;
  }
};

const actions = {
  async fetchMeetups({ commit }) {
    const res = await axios.get('http://localhost:3000/meetup/all');
    commit(REQUEST_SUCCESS, res.data);
  },
  async fetchMeetup({ commit }, id) {
    const res = await axios.get(`http://localhost:3000/meetup/${id}/json`);
    commit(REQUEST_METUP_SUCCESS, res.data)
  },
  addLikes({ commit }) {
    commit(ADD_LIKES);
  }
};

export default {
  state,
  mutations,
  actions,
};
