import styled from 'styled-components';

export const CloseIcon = styled.i`
  color: #cb2222;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #a21b1b;
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #fafafa;
  margin: 20px;
  height: 92vh;
  width: 350px;
  max-width: 350px;
  max-height: 92vh;
  overflow-y: scroll;
  overflow-x: hidden;

  span.error {
    color: red;
  }

  div.user {
    display: flex;
    margin: 10px 20px 0 10px;
    border-bottom: 3px solid #ededed;

    i {
      align-self: center;
      justify-content: flex-end;
      width: 100%;
      display: flex;
      margin-right: 20px;
    }

    img {
      width: 50px;
      height: 50px;
      align-self: center;
      margin-bottom: 5px;
      border-radius: 50px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;
    }

    span {
      color: #909090;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #c0c0c0;
  }

  ::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #909090;
  }
`;
