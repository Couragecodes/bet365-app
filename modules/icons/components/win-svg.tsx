import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WinIcon = ({ size, path, viewBox, preserveAspectRatio }: SvgProps) => (
  <View
    style={
      {
        // width: size.width,
        // height: size.height,
        // borderRadius: size.height / 2,
        // backgroundColor: 'green',
      }
    }
  >
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" preserveAspectRatio="xMidYMid meet">
      <Path
        d="M7.37534 13.7067C10.9762 13.7067 13.8952 10.7877 13.8952 7.18687C13.8952 3.58604 10.9762 0.666992 7.37534 0.666992C3.77452 0.666992 0.855469 3.58604 0.855469 7.18687C0.855469 10.7877 3.77452 13.7067 7.37534 13.7067Z"
        fill="#189970"
      />
      <Path
        d="M3.02734 7.06232L6.21005 10.4466L11.7198 4.67303L11.0548 3.92676L6.21005 8.95308L3.73951 6.36519"
        fill="white"
      />
      <Path
        d="M3.02734 7.06232L6.21005 10.4466L11.7198 4.67303L11.0548 3.92676L6.21005 8.95308L3.73951 6.36519"
        stroke="white"
        strokeWidth={0.325699}
      />
    </Svg>
  </View>
);

export default WinIcon;
