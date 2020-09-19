import { useEffect } from 'react';

import useRequest from '../../utils/useRequest';
import User from '../../types/User';

function UserWidget() {
  const { data, isLoading, error, get } = useRequest();

  useEffect(() => {
    get('/me');
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <div>Fetching user data ... </div>;
  }

  if (data) {
    const { images, id, display_name }: User = data;
    const avatar = images && images.length > 0 && images[0];
    return (
      <div>
        <img src={avatar.url} />
        <ul>
          <li>{id}</li>
          <li>{display_name}</li>
        </ul>
      </div>
    );
  }

  return <p>User widget</p>;
}

export default UserWidget;
