export default {
  namespace: "global2",
  state: {
    count: 0
  },
  reduces: {
    add(state, action) {
      return { ...state, count: state.count + 1 };
    },
    sub(state, action) {
      return { ...state, count: state.count - 1 };
    }
  },
  effects: {
    *addEffect(action, { call, put, delay }) {
      yield delay(1000);
      yield put({ type: "add" });
    }
  },
  subscriptions: {
    init({ dispatch }) {}
  }
};
