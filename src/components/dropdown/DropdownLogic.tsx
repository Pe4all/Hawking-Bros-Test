import { useState } from 'react';
import DropdownUI from './DropdownUI'; // Импортируем компонент UI
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setDropdown } from '../../store/slices/dropdown.slice';

function Dropdown() {
  const dispatch = useDispatch();

  const dropdown = useSelector(
    (state: RootState) => state.dropdown.selected
  );

  const options = {
    1: "Dropdown option",
    2: "Dropdown option 1",
    3: "Dropdown option 2",
  };

  const [isOpen, setIsOpen] = useState(false); // Состояние для отслеживания открытости списка

  const handleDropdownChange = (value : string) => {
    dispatch(setDropdown(value));
    toggleDropdown(); // Закрываем список после выбора значения
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Изменяем состояние открытости при клике
  };

  return (
    <DropdownUI
      option={dropdown}
      isOpen={isOpen}
      toggleDropdown={toggleDropdown}
      handleDropdownChange={handleDropdownChange}
      options={options}
    />
  );
}

export default Dropdown;