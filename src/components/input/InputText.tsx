import useInputState from './useInputState';
import InputUI from './InputUI';

function InputText() {
    const { warning, handleInputInvalid } = useInputState();

    return (
        <InputUI
            label="Input Text Label"
            type="text"
            placeholder="Type here"
            minLength={8}
            id="text"
            handleInputInvalid={handleInputInvalid}
            warning={warning}
        />
    );
}

export default InputText;