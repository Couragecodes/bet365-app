import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME } from '../../constants/theme';
import { BetProvider, useBet } from '../../context/mybets/StateContext';
import MenuBar from '../../components/mybets/menu-bar';
import EmptyCard from '../../modules/myBets/components/EmptyCard';
import TicketFull from '../../modules/myBets/components/ticket/ticket-card';
import { ticketInfos } from '../../constants/mybets';

interface MyBetsPageProps {
  data: typeof ticketInfos;
}

const MyBetsScreen = () => {
  return (
    <BetProvider>
      <MyBetsPage data={ticketInfos} />
    </BetProvider>
  );
};

export default MyBetsScreen;

const MyBetsPage: React.FC<MyBetsPageProps> = ({ data }) => {
  const { betState } = useBet();
  const empTitle = 'There are currently no bets to display';

  // Function to determine if TicketFull should be displayed
  const shouldRenderTicketFull = () => {
    if (data.stats === 'settled') {
      return betState === 'All' || betState === 'Settled';
    } else if (data.stats === 'unsettled') {
      if (betState === 'Live Now') {
        const hasLiveData = data.selections.some((section) => section.status === 'live');
        return hasLiveData;
      }
      return betState === 'Cash Out' || betState === 'Unsettled' || betState === 'All';
    }
    return false;
  };

  const getCardContent = (emptyTitle: string, emptyDescription: string, emptyTextExta?: string) => {
    const description = { main: emptyDescription, extra: emptyTextExta };
    return shouldRenderTicketFull() ? (
      <TicketFull title={betState} />
    ) : (
      <EmptyCard title={emptyTitle} description={description} />
    );
  };

  const renderContent = () => {
    switch (betState) {
      case 'Cash Out':
        return (
          <View style={styles.betContainer}>
            {getCardContent(empTitle, 'Bets that can be fully or partially cashed out appear here')}
          </View>
        );
      case 'Live Now':
        return (
          <View style={styles.betContainer}>
            {getCardContent(empTitle, 'Bets that are In-Play will appear here')}
          </View>
        );
      case 'Unsettled':
        return (
          <View style={styles.betContainer}>
            {getCardContent(empTitle, 'Bets that are unsettled will appear here')}
          </View>
        );
      case 'Settled':
        return (
          <View style={styles.betContainer}>
            {getCardContent(empTitle, 'Bets that are settled will appear here')}
          </View>
        );
      case 'All':
        return (
          <View style={styles.betContainer}>
            {getCardContent(
              empTitle,
              'Bets appear here for 24 hours',
              ' Older bets can be viewed in your Account History'
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>My Bets</Text>
      </View>
      <View style={styles.menuBar}>
        <MenuBar />
      </View>
      <ScrollView>
        <View style={styles.TicketContainer}>{renderContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#282828',
  },
  sectionTitleContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: 27,
  },
  sectionTitle: {
    fontSize: 25,
    color: '#fff',
    fontFamily: THEME.fontFamily.Inter_24ptBold,
  },
  menuBar: {
    marginHorizontal: 15,
    marginTop: 32,
    paddingBottom: 20,
  },
  TicketContainer: {
    marginHorizontal: 10,
  },
  betContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
