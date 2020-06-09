import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Container, CloseIcon } from './styles';
import { Creators as UsersCreators } from '../../store/modules/users/actions';

const UsersList = ({ users, usersError, removeUser }) => (
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
    {!!usersError && <span className="error">{usersError}</span>}
  </Container>
);

const mapStateToProps = (state) => ({
  users: state.users.users,
  usersError: state.users.error,
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
  usersError: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

UsersList.defaultProps = {
  usersError: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
