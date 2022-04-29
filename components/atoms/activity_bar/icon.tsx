import { cx, css } from '@emotion/css';
import { ReactNode } from 'react';

interface props {
  children: ReactNode;
}
const ActivityBarIcon = (props: props) => {
  return (
    <div className={cx('flex', 'w-full', 'h-16', 'justify-center', 'items-center', 'mb-4')}>
      {props.children}
    </div>
  );
};

export default ActivityBarIcon;
