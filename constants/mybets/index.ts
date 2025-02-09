import { Status } from '../../modules/myBets/components/ticket/StautsOutcome';
import { Stats, formatCurrency } from '../../utils/formatters';

export type TicketSelection = {
  event: string;
  dateTime: string;
  market: string;
  selection: string;
  odds: number;
  status: Status;
};

export type TicketInfoProp = {
  wager: number;
  returnAmount: number;
  selections: TicketSelection[];
  stats: Stats; // Either unsettled or settled
  oddsType: 'decimal' | 'fractional' | 'american'; // Types of odds
};

export const ticketInfos: TicketInfoProp = {
  wager: 300,
  returnAmount: 67200,
  selections: [
    {
      event: 'Gremio v Criciuma',
      dateTime: 'Wed Sep 25 18:00',
      market: 'Correct Score',
      selection: 'Criciuma 2-1',
      odds: 14.0,
      status: 'won',
    },
    {
      event: 'Bragantino v Internacional',
      dateTime: 'Wed Sep 25 18:00',
      market: 'Correct Score',
      selection: 'Draw 2-2',
      odds: 17.0,
      status: 'won',
    },
  ],

  stats: 'settled',
  oddsType: 'american',
} as TicketInfoProp;

export function myHome(
  leftFunds: number,
  state: TicketInfoProp['stats'],
  selection: TicketInfoProp['selections'],
  returnAmount: TicketInfoProp['returnAmount']
) {
  // creating a function to display the amount on the home button is should have a state management for settled and //unsettled like this
  // when on settled it should multiple the returnedAmount and amountLeft
  // when unsettled should show the amount
  // should check if game lost  state consider for the returned button

  const total: number = leftFunds + returnAmount;
  if (state === 'settled') {
    if (
      selection.some((selection) => selection.status === 'lost') ||
      selection.some((selection) => selection.status === 'live') ||
      selection.some((selection) => selection.status === 'notplayed')
    ) {
      return leftFunds;
    } else {
      return total;
    }
  } else {
    return leftFunds;
  }
}

const leftFund: number = 6000;

export const betBalance = {
  balance: formatCurrency(
    myHome(leftFund, ticketInfos.stats, ticketInfos.selections, ticketInfos.returnAmount)
  ),
} as const;
