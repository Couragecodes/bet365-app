import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// using the viewPort of my iphone 14 pro max
const BASE_WIDTH = 430;

const BASE_HEIGHT = 932;

export function normalizeFont(size: number) {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeWidth(size: number) {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}

export function normalizeHeight(size: number) {
  const scale = SCREEN_HEIGHT / BASE_HEIGHT;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}
