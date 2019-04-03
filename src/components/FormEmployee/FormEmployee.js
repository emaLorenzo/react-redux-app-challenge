import React from 'react';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Card from 'components/Card';
import EmptyContent from 'components/EmptyContent';
import CardContent from 'components/CardContent';
import actions from 'store/features/employees/actions';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const FormEmployee = ({
  list, loading, error, addEmployee,
}) => {
  const mapedCompanies = list.map(company => ({ value: company.name, label: company.name }));
  const employeeFields = [{
    type: 'select',
    name: 'employeer',
    isRequired: true,
    options: [{ label: 'Select Employeer', value: '' }].concat(mapedCompanies),
  }];
  const renderForm = loading
    ? (
      <CardContent>
        <ActivityIndicator />
      </CardContent>
    )
    : (
      <Form
        fields={employeeFields}
        onSubmit={addEmployee}
      />
    );
  return (
    <Card title="Create new Person">
      {list && list.length > 0
        ? renderForm
        : (
          <EmptyContent>
            Create at least one company in order to asociate employees with it
          </EmptyContent>
        )}
    </Card>
  );
};

FormEmployee.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  addEmployee: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  companies: { list },
  employees: { loading, error },
}) => ({
  list, loading, error,
});

const mapDispatchToProps = { addEmployee: actions.addEmployee };

export default connect(mapStateToProps, mapDispatchToProps)(FormEmployee);
