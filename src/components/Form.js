import React from 'react';
import styled from 'styled-components/native';
import useForm from 'hooks/useForm';
import { Picker, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Text from 'components/Text';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const FormContainer = styled.View`
  flex-direction: column;
  align-items: stretch;
  padding: 16px;
`;

const styles = StyleSheet.create({
  picker: {
    marginBottom: 10,
    height: 50,
    width: '100%',
  },
  input: {
    padding: 4,
    marginHorizontal: 0,
  },
  inputContainer: {
    marginBottom: 16,
    marginHorizontal: 0,
  },
});

function isDisabled(fields, values) {
  const requiredFields = fields.filter(field => field.isRequired);
  let disabled = false;
  requiredFields.forEach(
    (field) => {
      const value = values[field.name];
      if (value === undefined || value === '') {
        disabled = true;
      }
    },
  );
  return disabled;
}

const Form = ({ fields, onSubmit }) => {
  const {
    values, handleChange, handleSelect, handleSubmit,
  } = useForm(onSubmit);
  const disabled = isDisabled(fields, values);
  return (
    <FormContainer>
      {fields.map(
        (field, i) => (field.type === 'select'
          ? (
            <Picker
              key={i}
              style={styles.picker}
              selectedValue={values[field.name]}
              onValueChange={option => handleSelect(option, field.name)}
            >
              {field.options.map(
                (op, ind) => <Picker.Item key={ind} label={op.label} value={op.value} />,
              )}
            </Picker>
          ) : (
            <React.Fragment key={i}>
              <Text>{field.label}</Text>
              <Input
                onChangeText={text => handleChange(field.name, text)}
                value={field.isMoney ? numeral(values[field.name]).format('$0,0.[00]') : values[field.name] || ''}
                required={field.isRequired}
                inputStyle={styles.input}
                keyboardType={field.type !== 'text' ? field.type : 'default'}
                containerStyle={styles.inputContainer}
              />
            </React.Fragment>
          )),
      )}
      <Button
        raised
        onPress={handleSubmit}
        disabled={disabled}
        title="Save"
      />
    </FormContainer>
  );
};

Form.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
