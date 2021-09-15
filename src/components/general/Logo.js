import { logo } from './Logo.module.scss';
import logoSrc from '../../images/logo.svg';

function Logo() {
  return (
    <header>
      <h1>
        <img src={logoSrc} alt="tip calculator logo" className={logo} />
      </h1>
    </header>
  );
}

export default Logo;
