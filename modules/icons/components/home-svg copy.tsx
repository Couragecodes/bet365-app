import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

function HomeSvg(props: SvgProps) {
  const { size, path, viewBox = '0 0 20 25', preserveAspectRatio = 'xMidYMid meet' } = props;
  return (
    <View>
      <Svg
        width={size.width}
        height={size.height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
      >
        <Path
          d="M0 24.5V10L9.29289 0.707106C9.68342 0.316582 10.3166 0.316583 10.7071 0.707107L20 10V24.5H13.5V17.5H7V24.5H0Z"
          fill={path.fill}
          stroke={path.strokeColor}
          strokeWidth={path.strokeWidth}
        />
      </Svg>
    </View>
  );
}

export default HomeSvg;
