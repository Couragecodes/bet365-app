import * as Font from 'expo-font';
import { FontFamily } from '../../constants/fonts';

const loadFonts = async (): Promise<void> => {
  try {
    // Reduce FontFamily into a format accepted by Font.loadAsync
    const fonts = Object.keys(FontFamily).reduce(
      (acc, key) => {
        acc[key] = FontFamily[key as keyof typeof FontFamily];
        return acc;
      },
      {} as Record<string, any>
    );

    // Attempt to load fonts
    await Font.loadAsync(fonts);
    console.log('Fonts loaded successfully');
  } catch (error) {
    // Handle errors (e.g., log or report them)
    console.error('Failed to load fonts:', error);
    throw new Error('Font loading failed. Please check your font configuration.');
  }
};

export { loadFonts };
