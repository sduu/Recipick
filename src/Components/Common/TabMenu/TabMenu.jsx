import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TabMenuWrapper } from './TabMenu.style';

export default function TabMenu() {
  const { pathname } = useLocation();
  const userId = localStorage.getItem('user ID');

  return (
    <TabMenuWrapper type={pathname}>
      <Link to='/home' className='home'>
        홈
      </Link>
      <Link to='/chat' className='chat'>
        채팅
      </Link>
      <Link to='/post/upload' className='post'>
        게시물 작성
      </Link>
      <Link to={`/profile${userId}`} className='profile'>
        프로필
      </Link>
    </TabMenuWrapper>
  );
}
