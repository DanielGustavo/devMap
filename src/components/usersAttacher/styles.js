import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => (!!props.color === true ? props.color : '#fafafa')};
  width: 47%;
  background: ${(props) =>
    !!props.background === true ? props.background : '#c8c8c8'};
  padding: 15px 5px;
  border: none;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      !!props.backgroundHover === true ? props.backgroundHover : '#b4b4b4'};
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
  display: ${({ hidden }) => (hidden === false ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
    width: 400px !important;
    padding: 20px;
    border-radius: 5px;

    input {
      width: 100%;
      padding: 10px;
      border: 2px solid #b4b4b4;
      border-radius: 5px;

      &::placeholder {
        color: #b4b4b4;
      }
    }

    h1 {
      color: rgb(60, 60, 60);
      margin-bottom: 30px;
    }

    div.buttons {
      margin-top: 20px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-direction: row;
      padding-bottom: 0;
    }
  }
`;
