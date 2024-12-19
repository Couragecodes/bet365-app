import React from 'react';
import { View } from 'react-native';
import { Circle, ClipPath, Defs, G, Mask, Path, Rect, Svg } from 'react-native-svg';
import { normalizeHeight, normalizeWidth } from '../../../libs/normalize';

export default function SportsSvg(props: SvgProps) {
  const { size, path, viewBox = '0 0 21 22', preserveAspectRatio = 'xMidYMid meet' } = props;
  // w=22 h=26 svg
  return (
    <View>
      <Svg width={size.width} height={size.height} viewBox="0 0 22 26" fill="none">
        <G clip-path="url(#clip0_1453_253)">
          <Path
            d="M16.8401 9.54323C16.6764 5.12798 12.9644 1.68144 8.54919 1.84516C4.13395 2.00888 0.687408 5.72086 0.851128 10.1361C1.01485 14.5514 4.72683 17.9979 9.14207 17.8342C13.5573 17.6705 17.0039 13.9585 16.8401 9.54323Z"
            fill={path.fill}
            stroke={path.rectFill}
          />
          <Path
            d="M14.3208 15.1405L13.5664 15.7969L20.7867 24.0955L21.5411 23.4391L14.3208 15.1405Z"
            fill={path.rectFill}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1453_253">
            {/* <Rect
              width={normalizeWidth(size.width)}
              height={normalizeHeight(size.width)}
              fill="red"
              transform="translate(0.0351562 1.66064) rotate(-2.12358)"
            /> */}
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}

/*  
the svg to use later  

<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1453_253)">
<path d="M16.8401 9.54323C16.6764 5.12798 12.9644 1.68144 8.54919 1.84516C4.13395 2.00888 0.687408 5.72086 0.851128 10.1361C1.01485 14.5514 4.72683 17.9979 9.14207 17.8342C13.5573 17.6705 17.0039 13.9585 16.8401 9.54323Z" fill="#D9D9D9" stroke="black"/>
<path d="M14.3208 15.1405L13.5664 15.7969L20.7867 24.0955L21.5411 23.4391L14.3208 15.1405Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1453_253">
<rect width="21" height="24" fill="white" transform="translate(0.0351562 1.66064) rotate(-2.12358)"/>
</clipPath>
</defs>
</svg>


*/

/* 
 Union 

box-sizing: border-box;

position: absolute;
width: 19.85px;
height: 20.85px;

background: #D9D9D9;
border: 1px solid #000000


/* Vector 31 

position: absolute;
width: 6.5px;
height: 6.5px;

border: 1px solid #000000;

*/
