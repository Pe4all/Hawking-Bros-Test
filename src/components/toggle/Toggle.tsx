import ToggleUI from './ToggleUI';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setToggle } from '../../store/slices/toggle.slice';


function Toggle() {
  const dispatch = useDispatch();

  const toggled = useSelector(
    (state: RootState) => state.toggled.toggled
  );

  const handleToggleChange = () => {
    dispatch(setToggle(!toggled));
  };

  return (
    <ToggleUI 
        toggle={toggled}
        handleToggleChange={handleToggleChange}
    />
  );
}

export default Toggle;