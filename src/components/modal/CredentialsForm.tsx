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
    <form onSubmit={handleSubmit}>
      <label>
        IdInstance:
        <input
          type='text'
          value={idInstance}
          onChange={handleIdInstanceChange}
          required
        />
      </label>
      <br />
      <label>
        ApiToken:
        <input
          type='text'
          value={apiToken}
          onChange={handleApiTokenChange}
          required
        />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default CredentialsForm;
