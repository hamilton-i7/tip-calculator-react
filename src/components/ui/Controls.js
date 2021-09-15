import Button from '../general/Button';
import TextField from '../general/TextField';
import styles from './Controls.module.scss';
import dollarSignIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';
import * as Constants from '../../utils/constants';

function Controls({
  bill,
  onBillChange,
  peopleAmount,
  onPeopleAmountChange,
  tipButtons,
  onTipButtonClick,
  selectedTipButtonID,
  customPercentage,
  onCustomPercentageChange,
}) {
  return (
    <section className={styles['controls__container']}>
      <label htmlFor="bill" className={styles['controls__label']}>
        Bill
      </label>
      <TextField
        id="bill"
        iconSrc={dollarSignIcon}
        step="0.01"
        placeholder="0"
        value={bill}
        onChange={onBillChange}
      />
      <label className={styles['controls__label']} htmlFor="custom">
        Select Tip %
      </label>
      <div className={styles['tip-percentages__container']}>
        {tipButtons.map(button => (
          <Button
            key={button.id}
            text={button.percentage * 100 + '%'}
            variant={
              button.id === selectedTipButtonID
                ? Constants.PRIMARY_VARIANT
                : Constants.PRIMARY
            }
            onClick={() => onTipButtonClick(button)}
          />
        ))}
        <TextField
          id="custom"
          placeholder="Custom"
          lightPlaceholder={false}
          value={customPercentage}
          onChange={onCustomPercentageChange}
        />
      </div>
      <label htmlFor="people-amount" className={styles['controls__label']}>
        Number of People
      </label>
      <TextField
        id="people-amount"
        iconSrc={personIcon}
        placeholder="0"
        value={peopleAmount}
        onChange={onPeopleAmountChange}
      />
    </section>
  );
}

export default Controls;
