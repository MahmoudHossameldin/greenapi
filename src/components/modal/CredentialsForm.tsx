import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../hooks/app';
import {
  setIdInstance,
  setApiToken,
} from '../../store/slices/credentialsSlice';

type CredentialsFormProps = {
  closeModal: () => void;
};

function CredentialsForm({ closeModal }: CredentialsFormProps) {
  const { idInstance, apiToken } = useAppSelector((state) => state.credentials);
  const dispatch = useAppDispatch();

  function handleIdInstanceChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setIdInstance(e.target.value));
  }

  function handleApiTokenChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setApiToken(e.target.value));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    closeModal();
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor='idInstance'>IdInstance:</label>
        <Input
          id='idInstance'
          type='text'
          value={idInstance}
          onChange={handleIdInstanceChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor='apiToken'>ApiTokenInstance:</label>
        <Input
          id='apiToken'
          type='text'
          value={apiToken}
          onChange={handleApiTokenChange}
          required
        />
      </FormGroup>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  margin: 0 auto;
  padding: 2rem 5rem 5rem;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  label {
    flex: 0 0 15rem;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;

  &:focus {
    outline: currentColor;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #9e6b0e;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  margin-top: 2rem;
`;

export default CredentialsForm;
