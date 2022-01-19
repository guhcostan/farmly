import React from 'react';
import styled from 'styled-components';

const DividerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const Line = styled.div`
  width: 90%;
  margin: 10px 0;
  height: 1px;
  background-color: black;
`;

const Divider: React.FC = () => {
  return (
    <DividerStyled>
      <Line />
    </DividerStyled>
  );
};
export default Divider;
