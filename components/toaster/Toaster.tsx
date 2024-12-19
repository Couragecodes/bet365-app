import React from 'react';
import { useToaster } from '../../hooks/toaster';
import { Platform, View, StyleSheet } from 'react-native';
import Toast from './Toast';

function Toaster() {
  const { toasts, removeToast } = useToaster();

  return (
    <View style={styles.container}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
          id={toast.id}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    width: '100%',
    backgroundColor: 'transparent', // Transparent background
    overflow: 'visible', // Allow content to overflow
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 50 : 20, // Consider safe area for iOS
    zIndex: 1000, // Ensure it's above other UI elements
  },
});

export default Toaster;
