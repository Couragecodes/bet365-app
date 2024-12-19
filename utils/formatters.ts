// import { ticketInfos } from '../constants/mybets';

import { CountryCurrencyLocale, country } from '../constants/country';

const countryCurrencyMapping: CountryCurrencyLocale[] = [
  { country: 'Afghanistan', currency: 'AFN', locale: 'fa-AF' },
  { country: 'Albania', currency: 'ALL', locale: 'sq-AL' },
  { country: 'Algeria', currency: 'DZD', locale: 'ar-DZ' },
  { country: 'Angola', currency: 'AOA', locale: 'pt-AO' },
  { country: 'Argentina', currency: 'ARS', locale: 'es-AR' },
  { country: 'Australia', currency: 'AUD', locale: 'en-AU' },
  { country: 'Austria', currency: 'EUR', locale: 'de-AT' },
  { country: 'Bangladesh', currency: 'BDT', locale: 'bn-BD' },
  { country: 'Belgium', currency: 'EUR', locale: 'nl-BE' },
  { country: 'Brazil', currency: 'BRL', locale: 'pt-BR' },
  { country: 'Canada', currency: 'CAD', locale: 'en-CA' },
  { country: 'Chile', currency: 'CLP', locale: 'es-CL' },
  { country: 'China', currency: 'CNY', locale: 'zh-CN' },
  { country: 'Colombia', currency: 'COP', locale: 'es-CO' },
  { country: 'Czech Republic', currency: 'CZK', locale: 'cs-CZ' },
  { country: 'Denmark', currency: 'DKK', locale: 'da-DK' },
  { country: 'Egypt', currency: 'EGP', locale: 'ar-EG' },
  { country: 'Ethiopia', currency: 'ETB', locale: 'am-ET' },
  { country: 'Finland', currency: 'EUR', locale: 'fi-FI' },
  { country: 'France', currency: 'EUR', locale: 'fr-FR' },
  { country: 'Germany', currency: 'EUR', locale: 'de-DE' },
  { country: 'Ghana', currency: 'GHS', locale: 'en-GH' },
  { country: 'India', currency: 'INR', locale: 'hi-IN' },
  { country: 'Indonesia', currency: 'IDR', locale: 'id-ID' },
  { country: 'Italy', currency: 'EUR', locale: 'it-IT' },
  { country: 'Japan', currency: 'JPY', locale: 'ja-JP' },
  { country: 'Kenya', currency: 'KES', locale: 'en-KE' },
  { country: 'Mexico', currency: 'MXN', locale: 'es-MX' },
  { country: 'Netherlands', currency: 'EUR', locale: 'nl-NL' },
  { country: 'New Zealand', currency: 'NZD', locale: 'en-NZ' },
  { country: 'Nigeria', currency: 'NGN', locale: 'en-NG' },
  { country: 'Norway', currency: 'NOK', locale: 'no-NO' },
  { country: 'Pakistan', currency: 'PKR', locale: 'ur-PK' },
  { country: 'Philippines', currency: 'PHP', locale: 'fil-PH' },
  { country: 'Poland', currency: 'PLN', locale: 'pl-PL' },
  { country: 'Russia', currency: 'RUB', locale: 'ru-RU' },
  { country: 'Saudi Arabia', currency: 'SAR', locale: 'ar-SA' },
  { country: 'South Africa', currency: 'ZAR', locale: 'en-ZA' },
  { country: 'South Korea', currency: 'KRW', locale: 'ko-KR' },
  { country: 'Spain', currency: 'EUR', locale: 'es-ES' },
  { country: 'Sweden', currency: 'SEK', locale: 'sv-SE' },
  { country: 'Switzerland', currency: 'CHF', locale: 'de-CH' },
  { country: 'Thailand', currency: 'THB', locale: 'th-TH' },
  { country: 'Turkey', currency: 'TRY', locale: 'tr-TR' },
  { country: 'United Arab Emirates', currency: 'AED', locale: 'ar-AE' },
  { country: 'United Kingdom', currency: 'GBP', locale: 'en-GB' },
  { country: 'United States', currency: 'USD', locale: 'en-US' },
  { country: 'Vietnam', currency: 'VND', locale: 'vi-VN' },
  { country: 'Zimbabwe', currency: 'ZWL', locale: 'en-ZW' },
];

/**
 * Formats a value for a list of country names.
 * @param value - The numeric value to format.
 * @returns a styled number to fit country
 */

function formatCurrency(value: number) {
  const n: string = country;

  const result = countryCurrencyMapping.find((c) => c.country === n);
  const currency = result?.currency;
  const locale = result?.locale;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);
}

function formatNumber(
  value: number,
  formatType: 'decimal' | 'american' | 'fractional' = 'decimal'
): string {
  if (formatType === 'american') {
    // Handle American odds (moneyline odds)
    if (value > 2.0) {
      return `+${((value - 1) * 100).toFixed(0)}`;
    } else if (value >= 1.01 && value <= 2.0) {
      return `-${(100 / (value - 1)).toFixed(0)}`;
    } else if (value === 1.0) {
      return 'Even'; // Even money for decimal odds of 1.0
    } else {
      return 'Invalid odds';
    }
  } else if (formatType === 'fractional') {
    // Handle Fractional odds
    if (value >= 1.0) {
      const numerator = ((value - 1) * 100).toFixed(0);
      const denominator = 100;
      return `${numerator}/${denominator}`;
    } else {
      return 'Invalid odds';
    }
  } else if (formatType === 'decimal') {
    // Handle Decimal odds
    if (value >= 1.0) {
      return value.toFixed(2);
    } else {
      return 'Invalid odds';
    }
  } else {
    return 'Unknown format type';
  }
}

export type Stats = 'unsettled' | 'settled';

const formatBetType = (selections: any[], stats: Stats): string => {
  const count = selections.length;

  if (count === 1) return stats === 'unsettled' ? 'Single' : 'Singles';
  if (count === 2) return stats === 'unsettled' ? 'Double' : 'Doubles';
  if (count >= 3) return 'Accumulator'; // For 3 or more events

  return 'Invalid'; // Default case for unexpected input
};

export { formatCurrency, formatNumber, formatBetType };
