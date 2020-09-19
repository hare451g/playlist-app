import { useEffect } from 'react';

import useRequest from '../../utils/useRequest';
import User from '../../types/User';
import UserCard from './components/UserCard';

function UserWidget() {
  const { data, isLoading, progress, error, get } = useRequest();

  useEffect(() => {
    get('/me');
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <div>Fetching user data ... {progress}%</div>;
  }

  if (data) {
    const { images, display_name, product }: User = data;
    const avatar = images && images.length > 0 && images[0].url;
    return (
      <UserCard avatar={avatar} displayName={display_name} product={product} />
    );
  }

  return <p>User widget</p>;
}

export default UserWidget;
