import React from 'react';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  border-radius: 5px;
  background-color: white;
  elevation: 2;
`;
const CardTitle = styled.Text`
  padding: 15px 25px;
  font-size: 15px;
  color: #545454;
  font-weight: 300;
`;
const Divider = styled.View`
  height: 1px;
  background-color: #CBCBCB;
  opacity: 0.7;
`;

const Card = ({
  title, Header, Footer, children, ...props
}) => (
  <CardContainer {...props}>
    {Header
      ? <Header>{title}</Header>
      : <CardTitle>{title}</CardTitle>
    }
    <Divider />
    {children}
    {Footer && <Footer />}
  </CardContainer>
);

export default Card;
