import { cx, css } from '@emotion/css';
import { Devdotto, Discord, Github, Qiita, Twitter, Zenn } from '@icons-pack/react-simple-icons';
import ActivityBarIcon from 'components/atoms/activity_bar/icon';

const ActivityBar = (props: any) => {
  const iconSize = 35;
  return (
    <div
      className={cx(
        'w-16',
        'h-screen',
        'justify-center',
        css({
          backgroundColor: '#05252e',
        }),
      )}
    >
      <ActivityBarIcon>
        <Zenn color='#657b83' size={iconSize} />
      </ActivityBarIcon>
      <ActivityBarIcon>
        <Qiita color='#657b83' size={iconSize} />
      </ActivityBarIcon>
      <ActivityBarIcon>
        <Github color='#657b83' size={iconSize} />
      </ActivityBarIcon>
      <ActivityBarIcon>
        <Twitter color='#657b83' size={iconSize} />
      </ActivityBarIcon>
      <ActivityBarIcon>
        <Discord color='#657b83' size={iconSize} />
      </ActivityBarIcon>
      <ActivityBarIcon>
        <Devdotto color='#657b83' size={iconSize} />
      </ActivityBarIcon>
    </div>
  );
};

export default ActivityBar;
