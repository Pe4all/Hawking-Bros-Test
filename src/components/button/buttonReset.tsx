import Button from './buttonUI';
import { useDispatch } from 'react-redux';

import { setName, setPassword, setText } from  '../../store/slices/inputs.slice';
import { toggleCheckbox } from "../../store/slices/checkbox.slice"
import { setToggle } from '../../store/slices/toggle.slice';
import { setSelectedRadio } from '../../store/slices/radioSelect';
import { setDropdown } from '../../store/slices/dropdown.slice';

function ResetFormButton() {
  const dispatch = useDispatch();

  // Сбрасываем все в пустые значения
  const handleReset = () => {
    console.log('Поля формы сброшены!');
    dispatch(setName(''));
    dispatch(setPassword(''))
    dispatch(setText(''))
    dispatch(toggleCheckbox(false))
    dispatch(setToggle(false))
    dispatch(setSelectedRadio(''))
    dispatch(setDropdown('Dropdown option'))
  };

  return <Button id="Cancel" onClick={handleReset} variant="reset"/>;
}

export default ResetFormButton;
