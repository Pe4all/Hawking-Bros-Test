import Button from './buttonUI';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function SubmitFormButton() {
  const name = useSelector(
    (state: RootState) => state.inputs.inputName
  );
  
  const password = useSelector(
    (state: RootState) => state.inputs.inputPassword
  );
  
  const text = useSelector(
    (state: RootState) => state.inputs.inputText
  );
  
  const remembered = useSelector(
    (state: RootState) => state.checkox.checked
  );
  
  const toggled = useSelector(
    (state: RootState) => state.toggled.toggled
  );

  const radio = useSelector(
    (state: RootState) => state.radio.selectedRadio
  );
  
  const dropdown = useSelector(
    (state: RootState) => state.dropdown.selected
  );

  const handleSubmit = () => {

    if (name && password && text && remembered && toggled && radio && dropdown)  {
      const formData = {
        userName: name,
        password: password,
        text: text,
        remembered: remembered,
        toggeled: toggled,
        radioSelection: radio,
        dropdownTitle: dropdown,
      };
      console.log(formData);
      alert(JSON.stringify(formData));
    } else {
      alert('Заполните все поля формы');
    }
  };

  return <Button id="Next" onClick={handleSubmit} variant="submit"/>;
}

export default SubmitFormButton;