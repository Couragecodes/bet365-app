import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import { formatCurrency } from '../../../utils/formatters';

interface TicketHeaderProps {
  wager: number;
  type: string;
  returned: number;
  stats: string;
}

const COLORS = {
  headerText: '#00FFB6',
  shareText: '#00FFB6',
  returnedBorder: '#5B605E',
  returnedText: '#00B383',
  editBorder: '#494B4A',
};

const FONT_SIZES = {
  header: 14.27,
  share: 12,
  returned: 11,
  edit: 12,
};

const TicketHeader: React.FC<TicketHeaderProps> = ({ wager, type, returned, stats }) => {
  return (
    <View style={styles.container}>
      {/* Left Header Section */}
      <View style={styles.row}>
        <Text style={styles.textHeader}>{formatCurrency(wager)}</Text>
        <Text style={[styles.textHeader, styles.typeText]}>{type}</Text>
      </View>

      {/* Right Header Section */}
      <View style={styles.rowContainer}>
        <Text style={styles.shareText}>Share</Text>
        {stats === 'cashout' ? (
          <View style={styles.editContainer}>
            <Text style={styles.editText}>Edit Bet</Text>
          </View>
        ) : (
          <View style={styles.returnedContainer}>
            <Text style={styles.returnedText}>{formatCurrency(returned)}</Text>
            <Text style={styles.returnedText}>Returned</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default TicketHeader;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  } as ViewStyle,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  textHeader: {
    fontSize: FONT_SIZES.header,
    fontFamily: 'Inter-Bold',
    color: COLORS.headerText,
  } as TextStyle,
  typeText: {
    marginLeft: 8, // Replaces unsupported `gap`
  } as TextStyle,
  shareText: {
    fontSize: FONT_SIZES.share,
    fontFamily: 'Inter-Regular',
    color: COLORS.shareText,
    textTransform: 'capitalize',
  } as TextStyle,
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  } as ViewStyle,
  returnedContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: COLORS.returnedBorder,
    paddingHorizontal: 10.5,
    paddingVertical: 2,
    minWidth: 90,
  } as ViewStyle,
  returnedText: {
    textAlign: 'center',
    fontSize: FONT_SIZES.returned,
    fontFamily: 'Inter-Bold',
    color: COLORS.returnedText,
  } as TextStyle,
  editContainer: {
    paddingHorizontal: 10.5,
    paddingVertical: 3,
    borderLeftWidth: 1.25,
    borderLeftColor: COLORS.editBorder,
  } as ViewStyle,
  editText: {
    fontSize: FONT_SIZES.edit,
    fontFamily: 'Inter-Regular',
    color: COLORS.headerText,
    textTransform: 'capitalize',
  } as TextStyle,
});
