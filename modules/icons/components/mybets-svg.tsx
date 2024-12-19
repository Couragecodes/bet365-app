import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { useTheme } from '../../../context/ThemeContext';
import { normalizeFont, normalizeHeight, normalizeWidth } from '../../../libs/normalize';

type MyBetsSvgProps = SvgProps & {
  isActive: boolean;
};

export default function MyBetsSvg(props: MyBetsSvgProps) {
  const { theme } = useTheme();
  const {
    viewBox = '0 0 176 177',
    preserveAspectRatio = 'xMidYMid meet',
    size,
    path,
    isActive,
  } = props;
  // const [isActive, SetIsActive] = React.useState<boolean>(true);

  return (
    <View
      style={{
        position: 'relative',
        width: normalizeWidth(size.width),
        height: normalizeHeight(size.height),
        backgroundColor: path.fill,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: path.lineFill,
        borderRadius: normalizeHeight(size.height * 50),
      }}
    >
      {/* {
        need  to check the state of why the  svg is not working as expected
      } */}
      <Svg
        width={normalizeWidth(size.width)}
        height={normalizeHeight(size.height)}
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio={preserveAspectRatio}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {/* <Rect
          width={normalizeWidth(size.width)}
          height={normalizeHeight(size.height)}
          rx={'100%'}
          fill={'red'}
        /> */}

        {/* <Path
          d="M87.993 0.605103C70.6066 0.605103 53.6107 5.76076 39.1545 15.4201C24.6982 25.0794 13.431 38.8086 6.7775 54.8715C0.124026 70.9344 -1.61683 88.6096 1.77508 105.662C5.167 122.714 13.5393 138.378 25.8333 150.672C38.1273 162.966 53.7909 171.338 70.8432 174.73C87.8954 178.122 105.571 176.381 121.633 169.728C137.696 163.074 151.426 151.807 161.085 137.351C170.744 122.894 175.9 105.898 175.9 88.5121C175.874 65.2055 166.605 42.8608 150.124 26.3806C133.644 9.90033 111.3 0.630552 87.993 0.605103ZM87.993 168.178C72.2366 168.178 56.834 163.505 43.7331 154.752C30.6321 145.998 20.4212 133.556 14.3914 118.999C8.36174 104.442 6.78409 88.4237 9.85801 72.9701C12.9319 57.5164 20.5194 43.3214 31.6608 32.1799C42.8022 21.0385 56.9973 13.4511 72.451 10.3771C87.9046 7.30322 103.923 8.88087 118.48 14.9106C133.037 20.9403 145.479 31.1512 154.233 44.2522C162.986 57.3531 167.659 72.7557 167.659 88.5121C167.633 109.633 159.232 129.881 144.297 144.816C129.362 159.751 109.114 168.152 87.993 168.178Z"
          fill={path.fill}
        /> */}
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M139.403 59.4418L69.6578 123.923L43.8789 92.0785L50.3861 86.8108L70.5394 111.706L133.719 53.2944L139.403 59.4418Z"
          fill={path.rectFill}
        />
      </Svg>

      <View
        style={{
          position: 'absolute',
          backgroundColor: theme.tab.isActive,
          width: normalizeWidth(11),
          height: normalizeHeight(11),
          flexGrow: 1,
          borderRadius: 11 / 2,
          justifyContent: 'center',
          alignItems: 'center',
          right: -14,
          top: -4,
          display: isActive ? 'flex' : 'none',
        }}
      >
        <Text style={{ color: 'white', fontSize: normalizeFont(7) }}>1</Text>
      </View>
    </View>
  );
}
