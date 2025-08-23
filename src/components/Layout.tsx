import React from 'react';
import Header from './Home/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full justify-center overflow-hidden sm:mt-3">
      <div className="w-full max-w-[435px] overflow-hidden bg-gray-50 p-4 sm:rounded-2xl sm:border sm:border-gray-200">
        <Header />
        {children}
      </div>
    </div>
  );
}
