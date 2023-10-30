import styles from "./toggle.module.scss";

interface ToggleProps {
  toggle: boolean;
  handleToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обновлен тип события
}

function Toggle(props: ToggleProps) {
  return (
    <label className={styles.formItem}>
      <input type="checkbox" checked={props.toggle} onChange={props.handleToggleChange} />
      <span
        className={styles.formItemCheckbox}
      ></span>
      <p className={styles.formItemText}>{props.toggle ? 'On' : 'Off'}</p>
    </label>
  );
}

export default Toggle;