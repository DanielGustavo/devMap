import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container } from './styles';
import ErrorBox from '../errorBox';

const ErrorsList = ({ errors }) => (
  <Container>
    {errors.map((error) => (
      <ErrorBox id={error.id} key={error.id} />
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  errors: state.errors,
});

ErrorsList.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      timer: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps)(ErrorsList);
