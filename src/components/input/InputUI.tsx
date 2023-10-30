import styles from "./input.module.scss";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  info?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  id: string;
  handleInputInvalid: (event: React.FormEvent<HTMLInputElement>) => void;
  warning: string
}

function Input(props: InputProps) {

  return (
    <div className={styles.formItem}>
      <label className={styles.formItemlabel}>{props.label}</label>
      <input
        className={styles.formItemInput}
        type={props.type}
        placeholder={props.placeholder}
        pattern={props.pattern}
        minLength={props.minLength}
        maxLength={props.maxLength}
        onChange={props.handleInputInvalid}
        autoComplete="on"
        id={props.id}
      />
      {(props.info || props.warning) && (
        <p className={props.warning ? styles.warning : styles.formItemInfo}>
          {props.warning ? props.warning : props.info}
        </p>
      )}
    </div>
  );
}

export default Input;
