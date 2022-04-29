import { cx, css } from '@emotion/css';
import type { NextPage } from 'next';
import ActivityBar from 'components/molecules/activity_bar/ActivityBar';
import Viewer from 'components/organisms/viewer/Viewer';

const Home: NextPage = () => {
  return (
    <div
      className={cx(
        'w-full',
        'h-screen',
        'flex',
        css({
          backgroundColor: '#073642',
          color: '#fff',
        }),
      )}
    >
      {/* 左側メニュー */}
      <ActivityBar />

      {/* 右側 */}
      <Viewer />
    </div>
  );
};

export default Home;
