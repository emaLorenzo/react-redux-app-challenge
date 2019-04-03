import React from 'react';
import styled from 'styled-components/native';
import Card from 'components/Card';
import StrongText from 'components/StrongText';
import Text from 'components/Text';
import CardHeader from 'components/CardHeader';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const CardContent = styled.View`
  flex-direction: row;
  padding: 16px;
`;
const Column = styled.View`
  flex: 1;
  flex-direction: column;
`;

const CompanyOverview = ({ company }) => (
  <Card
    title="Profile Overview"
    Header={CardHeader}
  >
    <CardContent>
      <Column>
        <StrongText>Address:</StrongText>
        <Text>{company.address}</Text>
        <StrongText>Revenue:</StrongText>
        <Text>{numeral(company.revenue).format('$0,0.[00]')}</Text>
        <StrongText>Phone:</StrongText>
        <Text>{company.phone}</Text>
      </Column>
      <Column>
        <StrongText>Total Employees:</StrongText>
        <Text>{company.employeesCount}</Text>
      </Column>
    </CardContent>
  </Card>
);

CompanyOverview.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  company: PropTypes.object.isRequired,
};

export default CompanyOverview;
