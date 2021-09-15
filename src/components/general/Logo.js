import { logo } from './Logo.module.scss';
import logoSrc from '../../images/logo.svg';

function Logo() {
  return (
    <header>
      <img src={logoSrc} alt="tip calculator logo" className={logo} />
    </header>
  );
}

export default Logo;
