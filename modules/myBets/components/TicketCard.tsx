import React from 'react';
import { View, StyleSheet, Dimensions, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TicketHeader from './TicketHeader';
import TicketFooter from './TicketFooter';
import TicketInfo from './TicketInfo';

import CashOutFooter from './CashOutFooter';
import { getBetType } from '../../../utils/formatters';
import { TicketInfoProp } from '../../../constants/mybets';

// Dimensions for screen size
const { width } = Dimensions.get('screen');

// Constants for styling
const COLORS = {
  gradientStart: '#303D39',
  gradientEnd: '#353535',
  borderColor: '#494B4A',
  textWhite: '#FFFFFF',
};

const PADDINGS = {
  horizontal: 15,
  vertical: 11,
};

const TICKET_WIDTH = width;

const TICKET_BORDER_RADIUS = 5.375;

const TicketCard = ({ data }: { data: TicketInfoProp }) => {
  return (
    <LinearGradient
      style={styles.ticketBody}
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.ticketBody}>
        <View style={styles.headerContainer}>
          <TicketHeader
            wager={data.wager}
            type={getBetType(data.selections, data.stats)}
            returned={data.returnAmount}
            stats={data.stats}
          />
        </View>
        <View style={styles.ticketInfoContainer}>
          {data.selections.map((item, index) => (
            <TicketInfo
              key={index}
              team={item.event}
              odds={item.odds}
              bookings={item.market}
              selected={item.selection}
              oddtype={data.oddsType}
              status={item.status}
              dateTime={item.dateTime}
              stats={data.stats}
            />
          ))}
        </View>
        <View style={styles.footerContainer}>
          <TicketFooter wager={data.wager} returned={data.returnAmount} stats={data.stats} />
          {data.stats === 'cashout' && <CashOutFooter wager={data.wager} />}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ticketBody: {
    borderRadius: TICKET_BORDER_RADIUS,
    height: 'auto',
    minWidth: 400,
  } as ViewStyle,

  headerContainer: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  } as ViewStyle,

  footerContainer: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
    marginBottom: 30, // Ensure some spacing after the footer
  } as ViewStyle,

  ticketInfoContainer: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
    marginBottom: 30, // Ensure spacing between Ticket Info and Footer
  } as ViewStyle,
});

export default TicketCard;
