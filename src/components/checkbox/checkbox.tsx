import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleCheckbox } from '../../store/slices/checkbox.slice';
import styles from "./checkbox.module.scss";

function Checkbox() {
  const dispatch = useDispatch();

  const remembered = useSelector(
    (state: RootState) => state.checkox.checked
  );

  const handleCheckboxChange = () => {
    dispatch(toggleCheckbox(!remembered));
  };

  return (
    <label className={styles.formItem}>
      <input type="checkbox" checked={remembered} onChange={handleCheckboxChange}/>
      <span
        className={styles.formItemCheckbox}
      ></span>
      <p className={styles.formItemText}>Remember me</p>
    </label>
  );
}

export default Checkbox;