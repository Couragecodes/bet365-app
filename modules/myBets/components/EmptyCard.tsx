import React from 'react';
import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../../constants/theme';

interface DescriptionProps {
  main: string;
  extra?: string;
}

interface EmptyCardProps {
  title: string;
  description: DescriptionProps;
}

const EmptyCard = (props: EmptyCardProps) => {
  const { title, description } = props;
  return (
    <LinearGradient
      style={styles.container}
      colors={['#303D39', '#353535']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.column}>
        <Text style={[styles.textCenter, styles.title]}>{title}</Text>
        <Text style={[styles.textCenter, styles.description]}>{description.main}</Text>
        <View style={{ margin: 2 }} />
        <Text style={[styles.textCenter, styles.description]}>{description.extra}</Text>
      </View>
    </LinearGradient>
  );
};

export default EmptyCard;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5.375,
    height: 117,
    justifyContent: 'center',
    // alignItems: 'center',
  } as ViewStyle,
  column: {
    flexDirection: 'column',
    alignItems: 'center', // Ensures all children are centered
    justifyContent: 'center',
  } as ViewStyle,
  textCenter: {
    textAlign: 'center', // Centralizes text horizontally
    flexWrap: 'wrap',
  } as TextStyle,
  title: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    marginBottom: 15, // Replaces unsupported `gap`
  } as TextStyle,
  description: {
    color: '#CFD3D2',
    fontSize: 12,
    fontFamily: THEME.fontFamily.RobotoRegular,
    width: '90%', // Ensures text wraps nicely
  } as TextStyle,
});
