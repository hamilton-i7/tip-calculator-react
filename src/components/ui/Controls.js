import Button from '../general/Button';
import TextField from '../general/TextField';
import styles from './Controls.module.scss';
import dollarSignIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';
import * as Constants from '../../utils/constants';

function Controls() {
  return (
    <section className={styles['controls__container']}>
      <label htmlFor="bill" className={styles['controls__label']}>
        Bill
      </label>
      <TextField id="bill" iconSrc={dollarSignIcon} step="0.01" />
      <label className={styles['controls__label']}>Select Tip %</label>
      <div className={styles['tip-percentages__container']}>
        <Button text="5%" variant={Constants.PRIMARY} />
        <Button text="10%" variant={Constants.PRIMARY} />
        <Button text="15%" variant={Constants.PRIMARY} />
        <Button text="25%" variant={Constants.PRIMARY} />
        <Button text="50%" variant={Constants.PRIMARY} />
        <Button text="Custom" variant={Constants.NEUTRAL} />
      </div>
      <label htmlFor="people-amount" className={styles['controls__label']}>
        Number of People
      </label>
      <TextField id="people-amount" iconSrc={personIcon} />
    </section>
  );
}

export default Controls;
