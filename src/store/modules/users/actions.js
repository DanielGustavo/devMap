export const Creators = {
  addUserRequest: (username, coordinates) => ({
    type: 'users/ADD_REQUEST',
    payload: { username, coordinates },
  }),

  addUserSuccess: (data) => ({
    type: 'users/ADD_SUCCESS',
    payload: { data },
  }),

  updateUser: (data) => ({
    type: 'users/UPDATE',
    payload: { data },
  }),

  removeUser: (id) => ({
    type: 'users/DELETE',
    payload: { id },
  }),
};
