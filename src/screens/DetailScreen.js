import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import CompanyOverview from 'components/CompanyOverview';
import EmployeesList from 'components/EmployeesList';

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'column',
  },
  card: {
    marginTop: 50,
  },
});

const CardContainer = styled.View`
  width: 100%;
  margin: 8px 0px;
`;

const DetailsPage = ({ companies, employees, navigation: { getParam } }) => {
  const id = getParam('id', undefined);
  const company = companies[id];
  const companyEmployees = employees.filter(emp => emp.employeer === company.name);
  const employeesCount = companyEmployees.length;

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps="always"
    >
      <CardContainer>
        <CompanyOverview style={styles.card} company={{ ...company, employeesCount }} />
      </CardContainer>
      <CardContainer>
        <EmployeesList style={styles.card} employees={companyEmployees} />
      </CardContainer>
    </ScrollView>
  );
};

DetailsPage.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name', 'Company Overview'),
});

const mapStateToProps = ({
  companies: { list: companies },
  employees: { list: employees },
}) => ({ companies, employees });

export default connect(mapStateToProps)(DetailsPage);
