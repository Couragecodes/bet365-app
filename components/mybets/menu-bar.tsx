import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useBet } from '../../context/mybets/StateContext';
import { THEME } from '../../constants/theme';

const MenuBar = () => {
  const menuItems = [
    { id: 1, name: 'Cash Out' },
    { id: 2, name: 'Live Now' },
    { id: 3, name: 'Unsettled' },
    { id: 4, name: 'Settled' },
    { id: 5, name: 'All' },
  ];

  const { betState, selectBet } = useBet();

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => selectBet(item.name)}
          style={[styles.menuItem, betState === item.name && styles.selectedItem]}
          accessible={true}
          accessibilityLabel={`Menu item: ${item}`}
        >
          <Text style={[styles.menuText, betState === item.name && styles.selectedItemText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#00FFAF',
    borderRadius: 20,
  },
  menuText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: THEME.fontFamily.Inter_24ptRegular,
  },
  selectedItemText: {
    color: '#000', // More contrast for selected item
    fontFamily: THEME.fontFamily.Inter_24ptBold,
  },
});
