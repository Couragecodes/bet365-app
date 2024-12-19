import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState, useEffect } from 'react';

// types defined here
type TabBarStyle = {
  deckTab: string;
  unActive: string;
  isActive: string;
  netural: string;
  white: string;
};
type ThemeColors = {
  background: string;
  primary: string;
  text: string;
};

type Theme = {
  dark: boolean;
  colors: ThemeColors;
  tab: TabBarStyle;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Define light and dark themes
const lightTheme: Theme = {
  dark: false,
  colors: {
    background: '#282828',
    primary: '#FFF44E',
    text: '#ffddff',
  },
  tab: {
    unActive: '#545454',
    isActive: '#39795E',
    netural: '#DDDDDD',
    deckTab: '#DDDDDD',
    white: '#fff',
  },
};

const darkTheme: Theme = {
  dark: true,
  colors: {
    background: '#121212', // A dark gray background, easier on the eyes than pure black
    primary: '#FFD700', // A gold tone for primary to match the vibrant style of lightTheme's yellow
    text: '#ffffff', // White text for contrast against the dark background
  },
  tab: {
    unActive: '#888888', // A lighter gray for inactive tabs
    isActive: '#4CAF50', // A slightly vibrant green to match the theme
    netural: '#444444', // Neutral tones for darker backgrounds
    deckTab: '#333333', // Slightly darker gray for deck tabs
    white: '#ffffff', // White remains consistent
  },
};

// Create the context with an initial value
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    // Load the saved theme from AsyncStorage when the component mounts
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
      } catch (error) {
        console.error('Failed to load theme from AsyncStorage:', error);
      }
    }
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    // Toggle between light and dark themes
    setTheme((prevTheme) => {
      const newTheme = prevTheme.dark ? lightTheme : darkTheme;

      // Save the new theme to AsyncStorage
      AsyncStorage.setItem('theme', newTheme.dark ? 'dark' : 'light').catch((error) =>
        console.error('Failed to save theme:', error)
      );

      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
