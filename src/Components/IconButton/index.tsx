import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image`

`;

interface Props {
  iconName:
    | 'arrow_left'
    | 'notification'
    | 'camera'
    | 'live'
    | 'send'
    | 'dotMenu'
    | 'favorite'
    | 'comment'
    | 'bookmark'
    | 'menu';
  style?: object;
  onPress?: () => void;
}

const IconButton = ({iconName, style, onPress}: Props) => {
  const imageSource = {
    arrow_left: require('~/Assets/Images/icon/ic_arrow_left.png'),
    arrow_left_w: require('~/Assets/Images/icon/ic_arrow_left_w.png'),
    notification: require('~/Assets/Images/icon/ic_notifications.png'),
    camera: require('~/Assets/Images/icon/ic_camera.png'),
    live: require('~/Assets/Images/icon/ic_live.png'),
    send: require('~/Assets/Images/icon/ic_send.png'),
    dotMenu: require('~/Assets/Images/icon/ic_dot_menu.png'),
    favorite: require('~/Assets/Images/Tabs/ic_favorite_outline.png'),
    comment: require('~/Assets/Images/icon/ic_comment.png'),
    bookmark: require('~/Assets/Images/icon/ic_bookmark.png'),
    menu: require('~/Assets/Images/icon/ic_menu.png'),
    tab_home: require('~/Assets/Images/Tabs/ic_home.png'),
    tab_home_o: require('~/Assets/Images/Tabs/ic_home_outline.png'),
    tab_setting: require('~/Assets/Images/Tabs/ic_favorite.png'),
    tab_setting_o: require('~/Assets/Images/Tabs/ic_favorite_outline.png'),
  };

  return (
    <Container
      style={style}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          console.log('IconButton clicked.');
          onPress();
        }
      }}>
      <Icon source={imageSource[iconName]} />
    </Container>
  );
};

export default IconButton;
