import reactSizes from 'react-sizes';
import { DeviceSize } from '@styles/themed-components';

const withSizes = (component: { width: number }): { device: DeviceSize } => {
  const { width } = component;
  let device: DeviceSize = 'desktop';
  if (!width) {
    device = 'ssr';
  } else if (width <= 576) {
    device = 'phone';
  } else if (width <= 768) {
    device = 'tablet';
  }
  return {
    device,
  };
};

export default reactSizes(withSizes) as any;
