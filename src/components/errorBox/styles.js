import styled, { keyframes } from 'styled-components';

const comeFromEndOfScreen = keyframes`
  from {
    left: 100vw;
    transform: translateX(300px);
  }

  to {
    left: 100vw;
  }
`;

const getOutOfScreen = keyframes`
  from {
    left: 100vw;
  }

  to {
    left: 100vw;
    transform: translateX(300px);
  }
`;

export const ProgressBar = styled.div`
  width: ${({ timer }) => `${timer}%`};
  height: 3px;
  background: #c77676;
  margin-top: 20px;
  transition: all 0.5s ease-in-out;
  display: ${({ timer }) => (timer <= -10 ? 'none' : '')};
`;

export const Container = styled.div`
  color: #fafafa;
  width: 100%;
  min-height: 70px;
  background: #a21b1b;
  border-radius: 5px;
  padding: 5px;
  animation: ${({ timer }) =>
      timer <= 0 ? getOutOfScreen : comeFromEndOfScreen}
    1s ease-in-out 1 forwards;

  &:nth-child(n + 2) {
    margin-top: 10px;
  }
`;
