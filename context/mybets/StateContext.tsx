import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the context type
type StateContextType = {
  betState: string | 'Cash Out'; // Current bet string
  selectBet: (newBet: string) => Promise<void>; // Function to update the bet
};

// Create the context with a default value (can be empty objects/functions for type safety)
const StateContext = React.createContext<StateContextType | undefined>(undefined);

export const useBet = () => {
  const context = React.useContext(StateContext);
  if (!context) {
    throw new Error('useBet must be used within a BetProvider');
  }
  return context;
};

export function BetProvider({ children }: { children: React.ReactNode }) {
  const [betState, setBetState] = React.useState<string>('');

  // Load the saved state from AsyncStorage when the component mounts
  React.useEffect(() => {
    async function loadSavedState() {
      try {
        const savedString = await AsyncStorage.getItem('bets');
        if (savedString) {
          setBetState(savedString);
        }
      } catch (error) {
        console.error('Failed to load saved state:', error);
      }
    }
    loadSavedState();
  }, []);

  // Function to update the state and persist it
  const selectBet = async (newBet: string) => {
    try {
      await AsyncStorage.setItem('bets', newBet); // Save to storage
      setBetState(newBet); // Update state
    } catch (error) {
      console.error('Failed to save new bet:', error);
    }
  };

  // Provide the state and updater function
  const value: StateContextType = {
    betState,
    selectBet,
  };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
}
