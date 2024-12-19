import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import React from 'react';

const NotFoundPage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text>Not found Page</Text>
      <Link href={'/'}>HomePage</Link>
    </View>
  );
};

export default NotFoundPage;
