import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useToaster } from '../hooks/toaster';

const MainPage = () => {
  const { addToast } = useToaster();

  function toastUp() {
    addToast('testing ', 'error');
  }

  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  function nestPage() {
    router.push('/home');
  }

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ gap: 20 }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            height: 50,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={toggleTheme}
        >
          <Text style={{ color: theme.colors.text, fontSize: 24 }}>
            {theme.dark ? 'DARK' : 'LIGHT'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            height: 50,
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={nestPage}
        >
          <Text style={{ color: theme.colors.text, fontSize: 24 }}>
            {/* {theme.dark ? 'DARK' : 'LIGHT'} */}
            Toast Up
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
    </View>
  );
};

export default MainPage;
