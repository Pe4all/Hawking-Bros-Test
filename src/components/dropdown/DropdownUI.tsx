import styles from "./dropdown.module.scss";

interface DropdownUIProps {
  option: string;
  isOpen: boolean;
  toggleDropdown: () => void;
  handleDropdownChange: (value: string) => void;
  options: { [key: number]: string };
}

function DropdownUI({ option, isOpen, toggleDropdown, handleDropdownChange, options } : DropdownUIProps) {
  return (
    <div className={styles.formItem}>
      <label htmlFor="dropdown" className={styles.formItemLabel}>Dropdown Title</label>  
      <span className={styles.customDropdown}>
        <ul
          className={`${styles.menu} ${isOpen ? `${styles.open}` : ''}`}
          onClick={toggleDropdown}
          id="dropdown"
        >
          <span className={styles.currentItem}>{option}</span>
          {Object.keys(options).map((key) => (
            <li
              key={key}
              onClick={() => handleDropdownChange(options[parseInt(key)])}
              value={options[parseInt(key)]}
              className={styles.dropdownListItem}
            >
              {options[parseInt(key)]}
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
}

export default DropdownUI;
