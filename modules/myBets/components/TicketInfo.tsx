import React from 'react';
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import WinIcon from '../../icons/components/win-svg';
import NotPlayed from '../../icons/components/notplayed-svg';
import { formatNumber } from '../../../utils/formatters';

interface TicketInfoProps {
  team: string;
  odds: number;
  bookings: string;
  selected: string;
  oddtype: 'decimal' | 'american' | 'fractional';
  status: string;
  dateTime: string;
  stats: string;
}

const COLORS = {
  text: '#FFFFFF',
  highlight: '#FFB300',
};

const FONT_SIZES = {
  selection: 14,
  bookings: 12,
  teams: 11,
  odds: 14,
  gameTime: 11,
};

const TicketInfo: React.FC<TicketInfoProps> = ({
  team,
  odds,
  bookings,
  selected,
  oddtype,
  status,
  dateTime,
  stats,
}) => {
  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          {status === 'won' ? (
            <WinIcon
              size={{
                width: 14,
                height: 14,
              }}
              path={{
                fill: '',
              }}
            />
          ) : (
            <NotPlayed />
          )}
        </View>
        <View style={styles.column}>
          <Text style={styles.selectionText}>{selected}</Text>
          <Text style={styles.bookingsText}>{bookings}</Text>
          <View style={styles.row}>
            <Text style={styles.teamsText}>{team}</Text>
            {stats === 'cashout' && <Text style={styles.gameTime}>{dateTime}</Text>}
          </View>
        </View>
      </View>

      {/* Right Section */}
      <View>
        <Text style={styles.oddsText}>{formatNumber(odds, oddtype)}</Text>
      </View>
    </View>
  );
};

export default TicketInfo;

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 8,
  } as ViewStyle,
  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  } as ViewStyle,
  iconContainer: {
    height: 18,
    justifyContent: 'center',
    marginRight: 5, // Replaces unsupported `gap`
  } as ViewStyle,
  column: {
    flexDirection: 'column',
  } as ViewStyle,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4.5, // Replaces unsupported `gap`
  } as ViewStyle,
  selectionText: {
    fontSize: FONT_SIZES.selection,
    fontFamily: 'Inter-ExtraBold',
    color: COLORS.text,
    lineHeight: 18,
  } as TextStyle,
  bookingsText: {
    fontSize: FONT_SIZES.bookings,
    fontFamily: 'Inter-Regular',
    color: COLORS.text,
  } as TextStyle,
  teamsText: {
    fontSize: FONT_SIZES.teams,
    fontFamily: 'Inter-Regular',
    color: COLORS.text,
    marginRight: 10, // Adds spacing between team name and game time
  } as TextStyle,
  gameTime: {
    fontSize: FONT_SIZES.gameTime,
    fontFamily: 'Inter-Regular',
    color: COLORS.text,
  } as TextStyle,
  oddsText: {
    fontSize: FONT_SIZES.odds,
    fontFamily: 'Inter-Regular',
    color: COLORS.highlight,
    lineHeight: 18,
  } as TextStyle,
});
