import RadioUI from './RadioUI';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setSelectedRadio } from '../../store/slices/radioSelect';

function Radio() {
  const dispatch = useDispatch();

  const selectedRadio = useSelector(
    (state: RootState) => state.radio.selectedRadio
  );
  const handleToggleChange = (id: string) => {
    if (selectedRadio === id) {
      dispatch(setSelectedRadio('')); // Обнуляем, если уже выбран
    } else {
      dispatch(setSelectedRadio(id)); // Устанавливаем новое значение
    }
  };

  return (
    <>
        <RadioUI 
        id="Radio selection 1"
        selectedRadio={selectedRadio}
        handleToggleChange={handleToggleChange}
        />
        <RadioUI 
        id="Radio selection 2"
        selectedRadio={selectedRadio}
        handleToggleChange={handleToggleChange}
        />
        <RadioUI 
        id="Radio selection 3"
        selectedRadio={selectedRadio}
        handleToggleChange={handleToggleChange}
        />
    </>
  );
}

export default Radio;
