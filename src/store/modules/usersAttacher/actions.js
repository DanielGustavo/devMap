export const Creators = {
  show: (coordinates) => ({
    type: 'usersAttacher/SHOW',
    payload: {
      coordinates: {
        long: coordinates[0],
        lat: coordinates[1],
      },
    },
  }),

  hide: () => ({
    type: 'usersAttacher/HIDE',
  }),
};
