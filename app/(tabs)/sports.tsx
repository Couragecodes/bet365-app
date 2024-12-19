import { Text, View } from 'react-native';
import React from 'react';
import { SportsSvg } from '../../modules/icons/components';
import { useTheme } from '../../context/ThemeContext';
import StatusOutcome from '../../modules/myBets/components/ticket/StautsOutcome';

const sportsScreen = () => {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.text }}>sportsScreen</Text>
      <View style={{ width: 100, height: 100 }}>
        <SportsSvg
          size={{
            width: 100,
            height: 100,
          }}
          path={{
            fill: theme.colors.primary,
            strokeColor: undefined,
            strokeWidth: undefined,
            strokeLinejoin: undefined,
            strokeLinecap: undefined,
            fillRule: undefined,
            clipRule: undefined,
            rectFill: theme.colors.primary,

            lineFill: theme.colors.primary,
          }}
        />
      </View>

      <StatusOutcome
        status={'notplayed'}
        width={50}
        height={50}
        play={{
          width: 50,
          height: 50,
          borderWidth: 8,
        }}
      />
    </View>
  );
};

export default sportsScreen;
