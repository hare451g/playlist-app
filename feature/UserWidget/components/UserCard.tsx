import Avatar from './Avatar';
import style from './UserCard.module.css';

type PropTypes = {
  avatar: string;
  displayName: string;
  product: string;
};

const UserCard: React.FC<PropTypes> = ({ avatar, displayName, product }) => {
  return (
    <div className={style.container}>
      <Avatar src={avatar} />
      <p className={style.displayName}>{displayName}</p>
      <p className={style.premiumProduct}>{product}</p>
    </div>
  );
};

export default UserCard;
