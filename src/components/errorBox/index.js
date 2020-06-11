import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Container, ProgressBar } from './styles';
import { Creators as ErrorsCreators } from '../../store/modules/errors/actions';

const ErrorBox = ({ id, decreaseTimer, removeError, errors }) => {
  const [error] = errors.filter((err) => err.id === id);
  const { timer, message } = error;

  useEffect(() => {
    async function decreaseTimerUntilSelfDestroy() {
      setInterval(() => {
        decreaseTimer({
          id,
          decreasingAmount: 20,
        });
      }, 1000);
    }

    decreaseTimerUntilSelfDestroy();
  }, []);

  useEffect(() => {
    async function RemoveErrorWhenTimerIsDone() {
      if (timer <= -20) {
        removeError(id);
      }
    }

    RemoveErrorWhenTimerIsDone();
  }, [timer]);

  return (
    <Container timer={timer}>
      <h2>Erro:</h2>
      <p>{message}</p>
      <ProgressBar timer={timer} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ErrorsCreators, dispatch);

ErrorBox.propTypes = {
  id: PropTypes.number.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
  removeError: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      timer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
