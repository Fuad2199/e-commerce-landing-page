import React from 'react';

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return <div>{children}</div>;
};

export default RoutesLayout;
