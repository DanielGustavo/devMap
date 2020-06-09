const INITIAL_STATE = [];

export default function errors(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'errors/ADD':
      return [
        ...state,
        {
          message: action.payload.message,
          id: Math.random(),
          timer: 100,
        },
      ];
    case 'errors/REMOVE':
      return [...state.filter((error) => error.id !== action.payload.id)];
    case 'errors/DECREASE_TIMER':
      return [
        ...state.map((error) => {
          if (error.id === action.payload.id) {
            return {
              ...error,
              timer: error.timer - action.payload.decreasingAmount,
            };
          }
          return error;
        }),
      ];
    default:
      return state;
  }
}
