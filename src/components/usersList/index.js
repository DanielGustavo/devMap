import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { Container, CloseIcon } from './styles';
import { Creators as UsersCreators } from '../../store/modules/users/actions';

const UsersList = ({ users, removeUser }) => (
  <Container>
    {users.map((user) => (
      <div key={user.id} className="user">
        <img alt="user avatar" src={user.photo} />
        <div>
          <b>{user.name}</b>
          <span>{user.username}</span>
        </div>
        <CloseIcon
          onClick={() => removeUser(user.id)}
          className="fa fa-times-circle"
        />
      </div>
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UsersCreators, dispatch);

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      coordinates: PropTypes.shape({
        long: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
