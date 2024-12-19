import { Button, ScrollView, Text, View } from 'react-native';
import React from 'react';

import { useTheme } from '../../context/ThemeContext';

import { SafeAreaView } from 'react-native-safe-area-context';

const homeScreen = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              color: theme.colors.text,
              fontFamily: 'EncodeSansCondensedBlack',
              fontSize: 50,
            }}
          >
            HomePage
          </Text>
          <View style={{ marginHorizontal: 50 }}>
            <Button title="just to change" color={theme.colors.primary} onPress={toggleTheme} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default homeScreen;
