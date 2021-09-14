import styles from './Button.module.scss';
import * as Constants from '../../utils/constants';

function Button({ variant, text, className = '', type = 'button' }) {
  const classes = `${getButtonVariant(variant)} ${className}`;
  return (
    <button type={type} className={classes}>
      {text}
    </button>
  );
}

function getButtonVariant(variant) {
  let buttonVariant;
  switch (variant) {
    case Constants.NEUTRAL:
      buttonVariant = styles['btn--neutral'];
      break;
    case Constants.PRIMARY:
      buttonVariant = styles['btn--primary'];
      break;
    case Constants.PRIMARY_VARIANT:
      buttonVariant = styles['btn--primary-variant'];
      break;
    default:
      buttonVariant = styles.btn;
  }
  return buttonVariant;
}

export default Button;
