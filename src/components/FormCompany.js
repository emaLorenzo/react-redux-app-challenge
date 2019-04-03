import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'components/Form';
import Card from 'components/Card';
import ErrorText from 'components/ErrorText';
import actions from 'store/features/companies/actions';

const FormCompany = ({ addCompany, error }) => {
  const companyFields = [
    {
      label: 'Name:',
      type: 'text',
      name: 'name',
      isRequired: true,
    },
    {
      label: 'Address:',
      type: 'text',
      name: 'address',
      isRequired: true,
    },
    {
      label: 'Revenue:',
      type: 'numeric',
      name: 'revenue',
      isRequired: true,
      isMoney: true,
    },
    {
      label: 'Phone:',
      type: 'numeric',
      name: 'phone',
      isRequired: true,
    },
  ];
  return (
    <Card title="Create new Company">
      <Form
        fields={companyFields}
        onSubmit={addCompany}
      />
      <ErrorText>{error}</ErrorText>
    </Card>
  );
};

FormCompany.propTypes = {
  addCompany: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = ({ companies: { error } }) => ({ error });
const mapDispatchToProps = { addCompany: actions.addCompany };

export default connect(mapStateToProps, mapDispatchToProps)(FormCompany);
