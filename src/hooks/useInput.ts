import { useState, ChangeEvent } from 'react';

const useInput = <T>(initialValue: T = null as any) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as any);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset] as const;
};

export default useInput;
