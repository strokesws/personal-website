import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { getDoc, doc } from 'firebase/firestore';

import { db } from '@/firebase';
import { IAboutMe, State } from '@/types';

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    name: '',
    role: '',
    picture: '',
    text: '',
    experienceList: [],
  },

  mutations: {
    setAboutMe: (state, data: IAboutMe) => {
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

const useStore = (): Store<State> => baseUseStore(key);

export { key, store, useStore };
