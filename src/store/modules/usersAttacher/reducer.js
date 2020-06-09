const INITIAL_STATE = {
  hidden: true,
  coordinates: null,
};

export default function usersAttacher(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'usersAttacher/SHOW':
      return {
        hidden: false,
        coordinates: action.payload.coordinates,
      };
    case 'usersAttacher/HIDE':
      return { ...state, hidden: true };
    default:
      return state;
  }
}
