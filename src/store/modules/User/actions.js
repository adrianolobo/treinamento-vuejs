import * as Mutations from '../../mutations';

export default {
  setUser({ commit }, user) {
    commit(Mutations.SET_USER, user);
  },
  setUserName({ commit }, userName) {
    commit(Mutations.SET_USER_NAME, userName);
  },
};
