export const Creators = {
  addError: (message) => ({
    type: 'errors/ADD',
    payload: { message },
  }),

  removeError: (id) => ({
    type: 'errors/REMOVE',
    payload: { id },
  }),

  decreaseTimer: (data) => ({
    type: 'errors/DECREASE_TIMER',
    payload: data,
  }),
};
