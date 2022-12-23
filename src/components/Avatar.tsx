import { AvatarProps } from '../@types/components';

import '../styles/components-styles/avatar.scss';

const HandleInitialUserName = (name: string): string => {
  const result = name?.toUpperCase().split(' ');
  const firstName = result[0];
  const lastName = result[result.length - 1];
  return `${firstName?.split('')[0]}${lastName?.split('')[0]}`;
};

export function Avatar({ username, profileImg = ''}: AvatarProps) {
  if (!profileImg) {
    return (
      <span className="avatar-round-wrapper">
        <span>{HandleInitialUserName(username)}</span>
      </span>
    );
  }
  
  return (
    <img 
      src={profileImg} 
      alt={`${username} profile image on GitHub` } 
      className="avatar-round-image"
    />
  );
}
