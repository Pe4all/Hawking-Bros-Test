import form from "./form.module.scss";

import InputName from '../components/input/InputName.tsx';
import InputPassword from '../components/input/InputPassword.tsx';
import InputText from '../components/input/InputText.tsx';

import Checkbox from "../components/checkbox/checkbox.tsx";
import Toggle from "../components/toggle/Toggle.tsx";
import Radio from "../components/radioSelect/Radio.tsx";
import Dropdown from '../components/dropdown/DropdownLogic.tsx';
import SubmitButton from '../components/button/buttonSubmit.tsx';
import ResetButton from '../components/button/buttonReset.tsx';

function Form() {

  return (
    <div className={form.container}>
      <form className={form.form} action="#">
        <InputName />
        <InputPassword/>
        <InputText/>
        <Checkbox />
        <Toggle />
        <Radio />
        <Dropdown/>
        <div className={form.buttonRow}>
          <ResetButton />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}

export default Form;
