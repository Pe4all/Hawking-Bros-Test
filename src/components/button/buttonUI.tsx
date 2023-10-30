import styles from "./button.module.scss";

interface ButtonProps {
    id: string;
    onClick: () => void;
    variant?: 'submit' | 'reset';
}

function Button(props: ButtonProps) {
  const buttonClass = props.variant === 'reset' ? styles.resetButton : styles.submitButton;

  return (
    <div className={styles.formItem}>
        <button type={props.variant} onClick={props.onClick} className={`${styles.formItemButton} ${buttonClass}`}>{props.id}</button>
    </div>
  );
}

export default Button;
