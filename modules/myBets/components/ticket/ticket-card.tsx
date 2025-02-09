import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { formatBetType, formatCurrency, formatNumber } from '../../../../utils/formatters';
import { THEME } from '../../../../constants/theme';

import SettingsIcon from '../../../icons/components/settings-svg';

import { TicketInfoProp, ticketInfos } from '../../../../constants/mybets';
import { normalizeFont, normalizeHeight, normalizeWidth } from '../../../../libs/normalize';
import StatusOutcome from './StautsOutcome';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const COLORS = {
  gradientStart: '#303D39',
  gradientEnd: '#353535',
  borderColor: '#494B4A',
  textWhite: '#FFFFFF',
};

const PADDINGS = {
  horizontal: normalizeWidth(15),
  vertical: normalizeHeight(15),
};

// const { betState } = useBet();

const TicketFull = () => {
  const data: TicketInfoProp = ticketInfos;
  const MatchData = data.selections;

  const betType = formatBetType(MatchData, data.stats);

  // a switch case for the win or loss review previous switch case and use best pratices
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.ticketBody}
        colors={[COLORS.gradientStart, COLORS.gradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Header */}
        <View style={styles.ticketHeader}>
          <View style={styles.ticketHeaderContent}>
            <View style={styles.headerTextGroup}>
              <Text style={styles.headerText}>{formatCurrency(data.wager)}</Text>
              <Text style={styles.headerText}>{betType}</Text>
            </View>
            <View style={styles.shareAndEdit}>
              {/* Share Button */}
              <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
                <Text style={styles.bttnText}>Share</Text>
              </TouchableOpacity>
              {/* Edit Button and return status container when settled */}

              {data.stats === 'settled' && (
                <View
                  style={[
                    styles.editButton,
                    {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: normalizeWidth(1),
                      borderColor: COLORS.borderColor,
                      borderRadius: 5.3,
                      paddingVertical: 2,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.bttnText,
                      { fontFamily: THEME.fontFamily.Inter_24ptBold, opacity: 0.5 },
                    ]}
                  >
                    {formatCurrency(data.returnAmount)}
                  </Text>

                  <Text
                    style={[
                      styles.bttnText,
                      { fontFamily: THEME.fontFamily.Inter_24ptBold, opacity: 0.5 },
                    ]}
                  >
                    Returned
                  </Text>
                </View>
              )}

              {data.stats === 'unsettled' && (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() =>
                    console.error(
                      `error code you havenot removed the error console and all other console.log`
                    )
                  }
                >
                  <Text style={styles.bttnText}>Edit Bet</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        {/* Ticket Match Info */}
        <View style={styles.ticketMatchInfo}>
          {MatchData.map((data, index) => (
            <View key={index} style={styles.matchInfoContainer}>
              <View style={styles.infoHeaderContainer}>
                {/* Info Section */}
                <View style={styles.infoHeader}>
                  <View style={styles.notPlayedIcon}>
                    <StatusOutcome
                      status={data.status}
                      width={14}
                      height={14}
                      play={{
                        width: 8,
                        height: 8,
                        borderWidth: 1,
                      }}
                    />
                  </View>
                  <View style={styles.infoContent}>
                    <View style={styles.infoPrediction}>
                      <Text style={styles.predictText}>{data.selection}</Text>
                    </View>
                    <Text style={styles.infoTitle}>{data.market}</Text>
                    {/* Long Text */}
                    <Text style={styles.longText} numberOfLines={2} ellipsizeMode="tail">
                      {data.event}
                      {'   '}
                      {ticketInfos.stats === 'unsettled' && `${data.dateTime}`}
                    </Text>
                  </View>
                </View>
                {/* Odds Section */}
                <View style={styles.infoOdds}>
                  <Text style={styles.oddsText}>
                    {formatNumber(data.odds, ticketInfos.oddsType)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* footer opening */}

        <View style={styles.footerContainer}>
          <View style={styles.footerHeader}>
            <View style={styles.box}>
              <View style={styles.columnGap}>
                <Text style={styles.footerTitle}>Wager</Text>
                <Text style={styles.footerAmount}>{formatCurrency(data.wager)}</Text>
              </View>
            </View>
            <View style={styles.box2}>
              <View style={styles.columnGap}>
                <Text style={styles.footerTitle}>
                  {data.stats === 'unsettled' ? 'Total To Return' : 'Return'}
                </Text>
                <Text style={styles.footerAmount}>{formatCurrency(data.returnAmount)}</Text>
              </View>
            </View>
          </View>
          {data.stats === 'unsettled' && (
            <View style={styles.footerCashoutContainer}>
              <View style={styles.firstBox}>
                <TouchableOpacity style={styles.cashoutButton}>
                  <Text style={styles.cashoutText}>Cash Out</Text>
                  <Text style={styles.cashamountText}>{formatCurrency(data.wager)}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.secondBox}>
                <TouchableOpacity style={styles.settingBox}>
                  <SettingsIcon />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </LinearGradient>
      <View style={styles.screenRuler} />
    </View>
  );
};

export default TicketFull;

const styles = StyleSheet.create({
  screenRuler: {
    display: 'none',
    width: 50,
    height: '100%',
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.5,
    left: 0,
    bottom: 15,
  } as ViewStyle,
  container: {
    width: SCREEN_WIDTH,
  } as ViewStyle,
  ticketBody: {
    marginHorizontal: 10,
    borderRadius: 5,
  },
  ticketHeader: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
  } as ViewStyle,
  ticketHeaderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextGroup: {
    flexDirection: 'row',
    gap: 5,
  },
  shareAndEdit: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    paddingHorizontal: 12,
  },
  editButton: {
    paddingHorizontal: 12,
    borderLeftWidth: 0.5,
    borderLeftColor: COLORS.borderColor,
  },
  ticketMatchInfo: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderColor,
  },
  matchInfoContainer: {
    paddingVertical: 10,
  },
  infoHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
    flex: 1,
  },
  notPlayedIcon: {
    justifyContent: 'center',
    width: 16,
    height: 16,

    alignItems: 'center',
  },
  infoContent: {
    flex: 1,
  },
  infoPrediction: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5,
  },
  infoTitle: {
    fontSize: normalizeFont(12),
    color: COLORS.textWhite,
    marginBottom: 5,
    fontFamily: THEME.fontFamily.Inter_18ptSemiBold,
  },
  longText: {
    color: COLORS.textWhite,
    fontSize: normalizeFont(12),
    flexShrink: 1,
    maxWidth: SCREEN_WIDTH * 0.75,
    fontFamily: THEME.fontFamily.Inter_24ptRegular,
  },
  infoOdds: {
    minWidth: normalizeWidth(50),
    alignItems: 'flex-end',
  },
  oddsText: {
    color: COLORS.textWhite,
    fontSize: normalizeFont(14),
    fontFamily: THEME.fontFamily.Inter_18ptRegular,
  },
  textWhite: {
    color: COLORS.textWhite,
    fontSize: normalizeFont(14),
    fontFamily: THEME.fontFamily.Inter_24ptBold,
  },

  footerContainer: {
    paddingHorizontal: PADDINGS.horizontal,
    paddingVertical: PADDINGS.vertical,
  },
  footerHeader: {
    flexDirection: 'row',
    width: '100%',
  },
  box: {
    flex: 1,
    alignItems: 'flex-start',
  },
  box2: {
    flex: 0.91743,
    alignItems: 'flex-start',
  },
  columnGap: {
    flexDirection: 'column',
    gap: 4,
  } as ViewStyle,
  footerTitle: {
    fontSize: normalizeFont(11),
    color: '#DDDDDD',
    letterSpacing: 1, // debug
    fontFamily: THEME.fontFamily.Inter_24ptRegular,
  } as TextStyle,
  footerAmount: {
    fontSize: normalizeFont(16),
    color: '#FFFFFF',
    fontFamily: THEME.fontFamily.Inter_18ptBold,
  } as TextStyle,
  footerCashoutContainer: {
    marginTop: 30,

    borderRadius: 10,
    flexDirection: 'row',
  } as ViewStyle,
  firstBox: {
    flex: 1,
  } as ViewStyle,
  settingBox: {
    height: normalizeHeight(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4F4F4F',
    width: normalizeWidth(50),
    borderWidth: 2,
    borderRadius: 5.5,
  } as ViewStyle,

  secondBox: {
    flex: 0.166666, // 0.166666 1/6
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cashoutButton: {
    flexDirection: 'row',
    backgroundColor: '#4F4F4F',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    flex: 1,
    borderRadius: 5.5,
  } as ViewStyle,
  cashoutText: {
    fontSize: normalizeFont(17),
    fontFamily: THEME.fontFamily.Inter_24ptBlack,
    color: 'white',
  } as TextStyle,
  cashamountText: {
    fontSize: normalizeFont(17),
    fontFamily: THEME.fontFamily.Inter_24ptBlack,
    color: '#00FEB5',
  } as TextStyle,
  predictText: {
    fontSize: normalizeFont(14),
    fontFamily: THEME.fontFamily.Inter_24ptBold,
    color: COLORS.textWhite,
  },
  headerText: {
    fontFamily: THEME.fontFamily.Inter_24ptBold,
    fontSize: normalizeFont(14),
    color: '#00FFB6',
  } as TextStyle,
  bttnText: {
    fontFamily: THEME.fontFamily.Inter_18ptRegular,
    fontSize: normalizeFont(11),
    color: '#00FFB6',
  } as TextStyle,
});
