import React from 'react';
import { StyleSheet, Text, View, TextStyle, ViewStyle } from 'react-native';
import { formatCurrency } from '../../../utils/formatters';

interface TicketFooterProps {
  wager: number;
  returned: number;
  stats: string;
}

const TicketFooter: React.FC<TicketFooterProps> = ({ wager, returned, stats }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.labelText}>Wager</Text>
        <Text style={styles.amountText}>{formatCurrency(wager)}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.labelText}>{stats === 'cashout' ? 'Total To Return' : 'Return'}</Text>
        <Text style={styles.amountText}>{formatCurrency(returned)}</Text>
      </View>
    </View>
  );
};

export default TicketFooter;

// Stylesheet
const COLORS = {
  label: '#DDDDDD',
  amount: '#FFFFFF',
};

const FONT_SIZES = {
  label: 11,
  amount: 15.5,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures dynamic spacing between columns
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  } as ViewStyle,
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as ViewStyle,
  labelText: {
    fontSize: FONT_SIZES.label,
    fontFamily: 'Inter-Regular',
    color: COLORS.label,
    marginBottom: 5, // Replaces unsupported `gap`
  } as TextStyle,
  amountText: {
    fontSize: FONT_SIZES.amount,
    fontFamily: 'Inter-Bold',
    color: COLORS.amount,
  } as TextStyle,
});
