import { logo } from './Logo.module.scss';
import logoSrc from '../../images/logo.svg';

function Logo() {
  return <img src={logoSrc} alt="tip calculator logo" className={logo} />;
}

export default Logo;
