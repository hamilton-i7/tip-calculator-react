import styles from './TextField.module.scss';

function TextField({
  id,
  className = '',
  value,
  onChange,
  iconSrc,
  step = '1',
}) {
  const classes = `${styles.textfield} ${className}`;

  return (
    <div className={styles['textfield__container']}>
      <input
        type="number"
        step={step}
        className={classes}
        id={id}
        value={value}
        onChange={onChange}
      />
      <img
        src={iconSrc}
        alt="textfield icon"
        className={styles['textfield__icon']}
      />
    </div>
  );
}

export default TextField;
