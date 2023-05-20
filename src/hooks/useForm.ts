import { useState, ChangeEvent } from 'react';

type FormState = {
  [key: string]: string;
};

type FormProps = {
  values: FormState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
};

function useForm(initialState: FormState): FormProps {
  const [values, setValues] = useState<FormState>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
