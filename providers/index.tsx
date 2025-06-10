import React from 'react';
import FramerMotionProvider from './FramerMotionProvider';


export const index = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <FramerMotionProvider>{children}</FramerMotionProvider>;
};

export default index;
