import React from 'react';
import { View } from 'react-native';

const NotPlayed = ({ w, h, bw, a }: { w: number; h: number; bw: number; a: boolean }) => {
  // const isActive: boolean = false;

  return (
    <View
      style={{
        width: w,
        height: h,
        borderRadius: h / 2,
        backgroundColor: a ? '#DDDDDD' : 'none',
        borderWidth: a ? 0 : bw,
        borderColor: a ? 'none' : '#A7A7A7',
      }}
    />
  );
};

export default NotPlayed;
