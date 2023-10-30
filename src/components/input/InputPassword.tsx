import useInputState from './useInputState';
import InputUI from './InputUI';

function InputPassword() {
    const { warning, handleInputInvalid } = useInputState();

    return (
        <InputUI
            label="Password"
            type="password"
            info="Your password is between 4 and 12 characters"
            placeholder="Enter password"
            minLength={4}
            maxLength={12}
            id="password"
            handleInputInvalid={handleInputInvalid}
            warning={warning}
        />
    );
}

export default InputPassword;