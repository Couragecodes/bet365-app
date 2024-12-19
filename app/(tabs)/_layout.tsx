import PropTypes from 'prop-types';
import { Tabs } from 'expo-router';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Dimensions, Pressable, Text, View } from 'react-native';
import React from 'react';
import '../../i18next';
import { useTranslation } from 'react-i18next';
import {
  CasinoSvg,
  HomeSvg,
  LiveInGameSvg,
  MyBetsSvg,
  SportsSvg,
} from '../../modules/icons/components';
import { useTheme } from '../../context/ThemeContext';
import { normalizeFont, normalizeHeight, normalizeWidth } from '../../libs/normalize';
import { betBalance } from '../../constants/mybets';
import { THEME } from '../../constants/theme';
// Get the width of the screen for tab width calculation
const width = Dimensions.get('window').width;

export default function TabsLayout() {
  const { t } = useTranslation();

  const { theme } = useTheme();
  // CustomTabBar for the bottom navigation
  const customTabBar = (props: BottomTabBarProps) => {
    const TAB_WIDTH = width / props.state.routes.length; // Dynamically calculate tab width based on the number of routes
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: theme.tab.deckTab,
          height: 80,
          // borderTopWidth: 5,
          // borderTopColor: 'red',
          position: 'absolute',
          bottom: 0,
        }}
      >
        {/* Loop through routes to render each tab */}
        {props.state.routes.map((route, index) => {
          // Get options for each route from descriptors
          const { options } = props.descriptors[route.key];

          // Determine if the tab is focused or not
          const isFocused = props.state.index === index;

          // Handle tab press event
          function onPress() {
            const event = props.navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            // Navigate if not already focused and event was not prevented
            if (!isFocused && !event.defaultPrevented) {
              props.navigation.navigate(route.name, { merge: true });
            }
          }

          // Handle long press event
          function onLongPress() {
            props.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          }

          // Define routes with their labels (you could also add icons here if needed)
          const routes = {
            home: {
              icon: (
                <HomeSvg
                  size={{
                    width: normalizeWidth(22),
                    height: normalizeHeight(24),
                  }}
                  path={{
                    fill: isFocused ? theme.tab.isActive : theme.tab.netural,
                    strokeColor: isFocused ? 'none' : theme.tab.unActive,
                    strokeWidth: isFocused ? 0 : 1,
                  }}
                />
              ),
              label: t(betBalance.balance),
            },
            sports: {
              icon: (
                <SportsSvg
                  size={{
                    width: normalizeWidth(22),
                    height: normalizeHeight(26),
                  }}
                  path={{
                    fill: isFocused ? theme.tab.netural : theme.tab.netural,
                    rectFill: isFocused ? theme.tab.isActive : theme.tab.unActive,
                    lineFill: isFocused ? theme.tab.isActive : theme.tab.unActive,
                  }}
                />
              ),
              label: t('All Sports'),
            },
            liveingame: {
              icon: (
                <LiveInGameSvg
                  size={{
                    width: normalizeWidth(37),
                    height: normalizeHeight(19),
                  }}
                  path={{
                    fill: isFocused ? theme.tab.netural : theme.tab.unActive,
                    rectFill: isFocused ? theme.tab.isActive : theme.tab.netural,
                  }}
                />
              ),

              label: t('Live In Game'),
            },
            mybets: {
              icon: (
                <MyBetsSvg
                  size={{
                    width: 23,
                    height: 23,
                  }}
                  path={{
                    fill: isFocused ? theme.tab.isActive : theme.tab.netural,
                    rectFill: isFocused ? theme.tab.white : theme.tab.unActive,
                    lineFill: isFocused ? theme.tab.isActive : theme.tab.unActive,
                  }}
                  isActive={true}
                />
              ),
              label: t('My Bets'),
            },
            casino: {
              icon: (
                <CasinoSvg
                  size={{
                    width: normalizeWidth(24),
                    height: normalizeHeight(20),
                  }}
                  path={{
                    fill: isFocused ? theme.tab.netural : theme.tab.unActive,
                    rectFill: isFocused ? theme.tab.isActive : theme.tab.netural,
                    lineFill: isFocused ? theme.tab.isActive : theme.tab.unActive,
                  }}
                />
              ),
              label: t('Casino'),
            },
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              // testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ position: 'relative' }} // This could be optimized, but it's fine for now
            >
              <View
                style={{
                  justifyContent: 'center', // Use 'center' to align items in the middle
                  alignItems: 'center',
                  paddingTop: 8, // Adjust padding for visual clarity
                  width: TAB_WIDTH, // Dynamically calculated width for each tab
                }}
              >
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 0,
                    rowGap: 7, // Adjust gap between text/icon if you add an icon
                  }}
                >
                  <View style={{ height: normalizeHeight(24) }}>
                    {/* Dynamic icon rendering based on the route */}
                    {routes[route.name as keyof typeof routes].icon}
                  </View>

                  <Text
                    style={{
                      color: isFocused ? theme.tab.isActive : theme.tab.unActive,
                      fontSize: normalizeFont(10),
                      fontFamily: THEME.fontFamily.Inter_24ptSemiBold,
                    }}
                  >
                    {/* Dynamic label rendering based on the route */}
                    {routes[route.name as keyof typeof routes].label}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    );
  };

  // Global screen options (you might add more here as needed)
  const ScreenOption = {
    headerShown: false, // Disable header for all screens in this tab layout
  };

  return (
    <Tabs screenOptions={ScreenOption} tabBar={customTabBar}>
      {/* Define tab screens here */}
      <Tabs.Screen name="home" key="home-tab" />
      <Tabs.Screen name="sports" key="sports-tab" />
      <Tabs.Screen name="liveingame" key="liveingame-tab" />
      <Tabs.Screen name="mybets" key="mybets-tab" />
      <Tabs.Screen name="casino" key="casino-tab" />
    </Tabs>
  );
}

//  need to organise the styleSheets here below once Issue is resolved
