import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const DESIGN_BASE_SCREEN = {
  width: 375,
  height: 812,
};

export const decideSize = (size) => {
  return (width / DESIGN_BASE_SCREEN.width) * size;
};
