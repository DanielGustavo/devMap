import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(ErrorsList);
