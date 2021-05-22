import { createStore } from 'vuex';
import { IStoreState } from '@/types';

export default createStore({
  state: {
    name: '',
    role: '',
    picture: '',
    text: '',
    experienceList: [],
  } as IStoreState,
  mutations: {},
  actions: {},
  modules: {},
});
