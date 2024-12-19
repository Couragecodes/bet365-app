import React from 'react';
import { View } from 'react-native';
import { NotPlayed, WinIcon } from '../../../icons/components';

// i want to create a logic that accepets a component as a prams to return with a state to show depend on if the type Status = "win" | "lost" | "live" |  "notplayed"

export type Status = 'won' | 'lost' | 'live' | 'notplayed';

type StatusOutcomeProps = {
  status?: Status;
  width: number;
  height: number;
  play: {
    width: number;
    height: number;
    borderWidth: number;
  };
};

function StatusOutcome(props: StatusOutcomeProps) {
  const { width, height, play, status } = props;

  switch (status) {
    case 'won':
      return (
        // <View
        //   style={{
        //     width: width,
        //     height: height,
        //     backgroundColor: 'green',
        //     borderRadius: height / 2,
        //   }}
        // >
        <WinIcon
          size={{
            width: width,
            height: height,
          }}
          path={{
            fill: '',
            strokeColor: undefined,
            strokeWidth: undefined,
            strokeLinejoin: undefined,
            strokeLinecap: undefined,
            fillRule: undefined,
            clipRule: undefined,
            rectFill: undefined,
            lineFill: undefined,
          }}
        />
        // </View>
      );

    case 'live':
      return <NotPlayed w={play.width} h={play.height} bw={play.borderWidth} a={true} />;

    case 'lost':
      return (
        <View
          style={{ backgroundColor: 'red', width: width, height: height, borderRadius: height / 2 }}
        />
      );
    case 'notplayed':
      return <NotPlayed w={play.width} h={play.height} bw={play.borderWidth} a={false} />;

    default:
      return (
        <View
          style={{
            backgroundColor: 'yellow',
            width: width,
            height: height,
            borderRadius: height / 2,
          }}
        />
      );
  }
}

export default StatusOutcome;
