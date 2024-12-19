import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ToastProps = {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
};

function Toast({ id, message, type = 'info', onClose }: ToastProps) {
  return (
    <TouchableOpacity style={[styles[type], styles.default]} onPress={() => onClose(id)}>
      <View>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  success: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  error: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  info: {
    backgroundColor: '#d1ecf1',
    borderColor: '#bee5eb',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  default: {
    marginVertical: 5,
    zIndex: 9999,
    position: 'static',
    right: 20,
  },
});

export default Toast;
