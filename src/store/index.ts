import { createStore } from 'vuex';
import { getDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase';
import { IStoreState } from '@/types';

export default createStore({
  state: {
    name: '',
    role: '',
    picture: '',
    text: '',
    experienceList: [],
  } as IStoreState,

  mutations: {
    setAboutMe: (state, data) => {
      state.name = data.name;
      state.role = data.role;
      state.picture = data.picture;
      state.text = data.text;
    },
  },

  actions: {
    /**
     * Load About Me data from database into store state
     */
    loadAboutMe: async ({ commit }) => {
      const docRef = doc(db, 'about', 'me');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const aboutMe = docSnap.data;
        commit('setAboutMe', aboutMe);
      } else {
        console.error('About me document not found');
      }
    },
  },

  modules: {},
});
