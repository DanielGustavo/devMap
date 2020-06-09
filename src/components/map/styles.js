import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${({ size }) => `${size}px`};
  border-radius: 50%;
  border: 3px solid #846ae0;
  background-color: #fafafa;
  padding: 4px;
  background-repeat: no-repeat;
`;
