import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Creators as UsersCreators } from '../../store/modules/users/actions';
import { Creators as UsersAttacherCreators } from '../../store/modules/usersAttacher/actions';
import { Container, Button } from './styles';

const UsersAttacher = ({ addUserRequest, hide, userCoordinates, hidden }) => {
  const [userInput, setUserInput] = useState('');
  const inputRef = React.createRef();

  useEffect(() => {
    async function focusUsernameInput() {
      if (!hidden) {
        inputRef.current.focus();
      }
    }

    focusUsernameInput();
  }, [hidden]);

  const handleAddUser = (e) => {
    e.preventDefault();
    addUserRequest(userInput, userCoordinates);
    setUserInput('');
    hide();
  };

  return (
    <Container hidden={hidden}>
      <form onSubmit={(e) => handleAddUser(e)}>
        <h1>Adicionar novo usuário</h1>
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Usuário no github"
          ref={inputRef}
        />

        <div className="buttons">
          <Button type="button" onClick={hide}>
            <b>Cancelar</b>
          </Button>
          <Button backgroundHover="#208b30" background="#28ae3c" type="submit">
            <b>Salvar</b>
          </Button>
        </div>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.usersAttacher.hidden,
  userCoordinates: state.usersAttacher.coordinates,
});

const creators = { ...UsersCreators, ...UsersAttacherCreators };
const mapDispatchToProps = (dispatch) => bindActionCreators(creators, dispatch);

UsersAttacher.propTypes = {
  hide: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  addUserRequest: PropTypes.func.isRequired,
  userCoordinates: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      long: PropTypes.number.isRequired,
      lat: PropTypes.number.isRequired,
    }),
  ]),
};

UsersAttacher.defaultProps = {
  userCoordinates: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAttacher);
