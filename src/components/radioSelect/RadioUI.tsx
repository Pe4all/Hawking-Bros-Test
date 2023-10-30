import styles from "./radio.module.scss";

interface RadioUIProps {
  id: string;
  selectedRadio: string;
  handleToggleChange: (id : string) => void;
}

function RadioUI({ id, selectedRadio, handleToggleChange }: RadioUIProps) {
    const handleClick = () => {
        handleToggleChange(id);
      };
    
  return (
    <label className={styles.formItem}>
      <input
        type="checkbox"
        id={id}
        checked={selectedRadio === id}
        onChange={handleClick} // Добавляем обработчик onChange
      />
      <span className={styles.formItemCheckbox}></span>
      <p className={styles.formItemText}>{id}</p>
    </label>
  );
}

export default RadioUI;
