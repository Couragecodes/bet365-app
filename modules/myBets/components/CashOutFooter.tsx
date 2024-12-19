import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, TextStyle } from 'react-native';
import { formatCurrency } from '../../../utils/formatters';
import SettingsIcon from '../../icons/components/settings-svg';
import { normalizeFont } from '../../../libs/normalize';

// TypeScript Props
interface CashOutFooterProps {
  wager?: number; // Optional in case no value is passed
}

// Colors Constant for Reusability
const COLORS = {
  buttonBackground: '#4F4F4F',
  buttonText: 'white',
  cashOutText: '#00FEB5',
  borderColor: '#4F4F4F',
};

// Component
const CashOutFooter: React.FC<CashOutFooterProps> = ({ wager = 0 }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonBase, styles.button]} // Apply reusable base styles first
        accessibilityRole="button"
        accessibilityLabel="Cash Out Button"
      >
        <View style={styles.rowGap}>
          <Text style={styles.buttonText}>Cash Out</Text>
          <Text style={styles.cashOutText}>{formatCurrency(wager)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonBase, styles.settingButton]} // Apply reusable base styles first
        accessibilityRole="button"
        accessibilityLabel="Settings Button"
      >
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CashOutFooter;

// Stylesheetdwe
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  } as ViewStyle,
  buttonBase: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalizeFont(5.37),
  } as ViewStyle,
  button: {
    backgroundColor: COLORS.buttonBackground,
    width: 325,
    height: 50,
  } as ViewStyle,
  buttonText: {
    color: COLORS.buttonText,
    fontSize: normalizeFont(17),
    fontFamily: 'Inter-ExtraBold',
  } as TextStyle,
  cashOutText: {
    color: COLORS.cashOutText,
    fontSize: normalizeFont(17),
    fontFamily: 'Inter-Bold',
  } as TextStyle,
  settingButton: {
    width: 50,
    borderWidth: 1.79,
    borderColor: COLORS.borderColor,
    height: 50,
  } as ViewStyle,
  rowGap: {
    flexDirection: 'row',
    gap: 6,
  } as ViewStyle,
});
