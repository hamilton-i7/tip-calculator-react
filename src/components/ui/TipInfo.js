import Button from '../general/Button';
import styles from './TipInfo.module.scss';
import * as Constants from '../../utils/constants';

function TipInfo({ tip, total }) {
  return (
    <section className={styles['tip-info__container']}>
      <div className={styles['amount-info__container']}>
        <h2 className={styles['amount-info__title']}>
          Tip Amount
          <div>/ person</div>
        </h2>
        <p className={styles['amount-info__amount']}>$4.27</p>
      </div>
      <div className={styles['amount-info__container']}>
        <h2 className={styles['amount-info__title']}>
          Total
          <div>/ person</div>
        </h2>
        <p className={styles['amount-info__amount']}>$32.79</p>
      </div>
      <Button
        text="RESET"
        variant={Constants.PRIMARY_VARIANT}
        className={styles['tip-info__btn']}
      />
    </section>
  );
}

export default TipInfo;
