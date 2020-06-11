const INITAL_STATE = {
  error: null,
  loading: false,
  users: [],
};

export default function users(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'users/DELETE':
      return {
        ...state,
        users: [...state.users.filter(({ id }) => id !== action.payload.id)],
      };
    case 'users/UPDATE':
      return {
        ...state,
        loading: false,
        error: null,
        users: [
          ...state.users.filter((user) => user.id !== action.payload.data.id),
          action.payload.data,
        ],
      };
    case 'users/ADD_REQUEST':
      return { ...state, loading: true, error: null };
    case 'users/ADD_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.payload.data],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
