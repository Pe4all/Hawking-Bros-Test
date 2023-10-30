import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setName, setPassword, setText } from '../../store/slices/inputs.slice'

const useInputState = () => {
  const dispatch = useDispatch();
  const { inputName, inputPassword, inputText } = useSelector((state: RootState) => state.inputs);

  const [warning, setWarning] = useState('');

  const handleInputInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.validity.valid === false) {
      // Обработка невалидного ввода
      setWarning("Error message informing me of a problem");
    } else {
      setWarning('');
      const inputValue = event.currentTarget.value;
      const inputId = event.currentTarget.id;
      // Используем switch case для определения, для какого инпута было изменено значение
      switch (inputId) {
        case 'name':
          dispatch(setName(inputValue));
          break;
        case 'password':
          dispatch(setPassword(inputValue));
          break;
        case 'text':
          dispatch(setText(inputValue));
          break;
        default:
          break;
      }
    }
  };

  return { inputName, inputPassword, inputText, handleInputInvalid, warning };
};

export default useInputState;