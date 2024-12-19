import { SplashScreen, Stack } from 'expo-router';
import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { StatusBar } from 'expo-status-bar';
import { loadFonts } from '../libs/fonts/loadFont';
import { Text, View } from 'react-native';
import { ToasterProvider } from '../context/toast/ToasterContext';
import Toaster from '../components/toaster/Toaster';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const initializeApp = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred while loading fonts.');
      } finally {
        SplashScreen.hideAsync();
      }
    };

    initializeApp();
  }, []);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <Text style={{ fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 16 }}>
          {error}
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'gray' }}>
          Please try restarting the app or check your setup.
        </Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return <Root />;
};

export default RootLayout;

function Root() {
  return (
    <ToasterProvider>
      <Toaster />
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="light" />
      </ThemeProvider>
    </ToasterProvider>
  );
}
