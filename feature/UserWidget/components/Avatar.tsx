import style from './Avatar.module.css';

type PropTypes = {
  src: string;
  size?: 'sm' | 'md' | 'lg';
};

const Avatar: React.FC<PropTypes> = ({ src, size = 'md' }) => {
  const className = `${style.avatar} ${style[size]}`;
  return <img className={className} src={src} />;
};

export default Avatar;
