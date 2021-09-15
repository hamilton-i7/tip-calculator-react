import styles from './TextField.module.scss';

function TextField({
  id,
  className = '',
  value,
  onChange,
  iconSrc = '',
  step = '1',
  placeholder = '',
  lightPlaceholder = true,
}) {
  const classes = `${
    iconSrc ? styles.textfield : styles['textfield--no-icon']
  } ${
    lightPlaceholder ? styles['light-placeholder'] : styles['dark-placeholder']
  } ${className}`;
  const input = (
    <input
      type="number"
      step={step}
      className={classes}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      min="0"
    />
  );
  const inputWithIcon = (
    <div className={styles['textfield__container']}>
      {input}
      <img
        src={iconSrc}
        alt="textfield icon"
        className={styles['textfield__icon']}
      />
    </div>
  );

  return <>{iconSrc ? inputWithIcon : input}</>;
}

export default TextField;
