import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { getDoc, doc, getDocs, query, collection } from 'firebase/firestore';

import { db } from '@/firebase';
import { IAboutMe, IExperience, State } from '@/types';

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  state: {
    name: '',
    role: '',
    picture: '',
    text: '',
    experienceList: [],
  },

  getters: {
    getAboutMe: (state): IAboutMe => {
      return {
        name: state.name,
        role: state.role,
        picture: state.picture,
        text: state.text,
      };
    },

    getExperienceList: (state): IExperience[] => state.experienceList,
  },

  mutations: {
    setAboutMe: (state, data: IAboutMe) => {
      state.name = data.name;
      state.role = data.role;
      state.picture = data.picture;
      state.text = data.text;
    },

    addExperience: (state, data: IExperience) => {
      state.experienceList.push(data);
    },

    clearExperienceList: (state) => (state.experienceList = []),
  },

  actions: {
    /**
     * Load About Me data from database into store state
     */
    loadAboutMe: async ({ commit }) => {
      const docRef = doc(db, 'about', 'me');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const aboutMe = docSnap.data();
        commit('setAboutMe', aboutMe);
      } else {
        console.error('About me document not found');
      }
    },

    /**
     * Load Experience data from database into store state
     */
    loadExperiences: async ({ commit }) => {
      commit('clearExperienceList');

      const q = query(collection(db, 'experience'));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data() as IExperience;
        commit('addExperience', data);
      });
    },
  },

  modules: {},
});

const useStore = (): Store<State> => baseUseStore(key);

export { key, store, useStore };
