import React from 'react';
import { connect } from 'react-redux';
import Card from 'components/Card';
import EmptyContent from 'components/EmptyContent';
import StrongText from 'components/StrongText';
import Text from 'components/Text';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import { StyleSheet } from 'react-native';
import numeral from 'numeral';

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 16,
  },
});

const CardContainer = styled.View`
  margin-bottom: 16px;
`;

const CompaniesList = ({ list, navigation: { navigate } }) => {
  const Footer = ({ id, name }) => (
    <Button
      type="clear"
      onPress={() => navigate('Detail', { id, name })}
      title="Company Overview"
      containerStyle={styles.buttonContainer}
    />
  );
  return (
    list && list.length > 0
      ? (
        list.map(
          (company, i) => (
            <CardContainer key={i}>
              <Card
                title={company.name}
                Header={CardHeader}
                Footer={() => <Footer id={i} name={company.name} />}
              >
                <CardContent>
                  <StrongText>Address:</StrongText>
                  <Text>{company.address}</Text>
                  <StrongText>Revenue:</StrongText>
                  <Text>{numeral(company.revenue).format('$0,0.[00]')}</Text>
                  <StrongText>Phone:</StrongText>
                  <Text>{company.phone}</Text>
                </CardContent>
              </Card>
            </CardContainer>
          ),
        )
      ) : (
        <EmptyContent>There are currently no companies to review</EmptyContent>
      )
  );
};

const mapStateToProps = ({ companies }) => ({
  list: companies.list,
});

export default connect(mapStateToProps)(CompaniesList);
