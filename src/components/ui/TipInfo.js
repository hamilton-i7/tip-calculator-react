import Button from '../general/Button';
import styles from './TipInfo.module.scss';
import * as Constants from '../../utils/constants';

const ZERO = '0.00';

function TipInfo({ bill, percentage, peopleAmount, onReset }) {
  const tip = isValid(+peopleAmount)
    ? calculateTip(+bill, percentage, peopleAmount)
    : ZERO;
  const total = isValid(+peopleAmount)
    ? calculateTotal(+bill, percentage, peopleAmount)
    : ZERO;
  const dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const buttonVariant = areFieldsEmpty(
    bill + '',
    percentage + '',
    peopleAmount + ''
  )
    ? Constants.DISABLED
    : Constants.PRIMARY_VARIANT;
  return (
    <div className={styles['tip-info__container']}>
      <div className={styles['amount-info__container']}>
        <h2 className={styles['amount-info__title']}>
          Tip Amount
          <span>/ person</span>
        </h2>
        <p className={styles['amount-info__amount']}>{dollarUS.format(tip)}</p>
      </div>
      <div className={styles['amount-info__container']}>
        <h2 className={styles['amount-info__title']}>
          Total
          <span>/ person</span>
        </h2>
        <p className={styles['amount-info__amount']}>
          {dollarUS.format(total)}
        </p>
      </div>
      <Button
        text="RESET"
        variant={buttonVariant}
        className={styles['tip-info__btn']}
        onClick={() => {
          if (buttonVariant !== Constants.DISABLED) onReset();
        }}
      />
    </div>
  );
}

function calculateTotal(bill, percentage, peopleAmount) {
  const absoluteBill = Math.abs(bill);
  const result =
    (absoluteBill + absoluteBill * Math.abs(percentage)) /
    Math.abs(peopleAmount);
  return roundToTwo(result);
}

function calculateTip(bill, percentage, peopleAmount) {
  return roundToTwo(
    (Math.abs(bill) * Math.abs(percentage)) / Math.abs(peopleAmount)
  );
}

function isValid(peopleAmount) {
  return peopleAmount !== 0;
}

function roundToTwo(num) {
  return +(Math.round(num + 'e+2') + 'e-2');
}

function areFieldsEmpty(bill, percentage, peopleAmount) {
  return (
    bill.length === 0 && percentage.length === 0 && peopleAmount.length === 0
  );
}

export default TipInfo;
