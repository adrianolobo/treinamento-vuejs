import * as Mutations from '../../mutations';

export default {
  [Mutations.SET_USER](store, user) {
    // eslint-disable-next-line
    store.user = user;
  },
  [Mutations.SET_USER_NAME](store, userName) {
    // eslint-disable-next-line
    store.user.name = userName;
  },
};
