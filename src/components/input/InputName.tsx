import useInputState from './useInputState';
import InputUI from './InputUI';

function InputName() {
    const { warning, handleInputInvalid } = useInputState();
    
    return (
        <InputUI
            label="Username"
            type="text"
            placeholder="Enter username"
            pattern="[\D\s]{3,}"
            id="name"
            handleInputInvalid={handleInputInvalid}
            warning={warning}
        />
      );
}

export default InputName;