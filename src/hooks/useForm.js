import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = () => {
    callback(values);
  };

  const handleChange = (name, value) => {
    setValues(preValues => ({ ...preValues, [name]: value }));
  };

  const handleSelect = (selected, name) => {
    setValues(preValues => ({ ...preValues, [name]: selected }));
  };

  return {
    handleChange,
    handleSelect,
    handleSubmit,
    values,
  };
};

export default useForm;
