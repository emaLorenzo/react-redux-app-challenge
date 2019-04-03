import React from 'react';
import Card from 'components/Card';
import StrongText from 'components/StrongText';
import Text from 'components/Text';
import styled from 'styled-components/native';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';

const EmployeeHeader = styled(CardHeader)`
  padding: 8px 0px;
`;
const Content = styled.View`
  flex-direction: column;
  padding-bottom: 8px;
`;

const EmployeesList = ({ employees }) => (
  <Card
    title="Employees"
    Header={CardHeader}
  >
    <CardContent>
      {employees.map(
        (employee, i) => (
          <Content key={i}>
            <EmployeeHeader>{employee.name}</EmployeeHeader>
            <StrongText>Address:</StrongText>
            <Text>{employee.address}</Text>
          </Content>
        ),
      )}
    </CardContent>
  </Card>
);

export default EmployeesList;
