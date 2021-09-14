import { card } from './Card.module.scss';

function Card({ className = '', children, containerTag = 'div' }) {
  const classes = `${card} ${className}`;
  const ContainerTag = containerTag;
  return <ContainerTag className={classes}>{children}</ContainerTag>;
}

export default Card;
