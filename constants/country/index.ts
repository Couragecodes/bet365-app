// CurrencyCode: ISO 4217 standard codes for supported currencies
type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'FOK'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KID'
  | 'KMF'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TVD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZWL';
// LocaleCode: BCP 47 compliant locales supported by the `Intl` API
type LocaleCode =
  | 'af-ZA' // South Africa
  | 'am-ET' // Ethiopia
  | 'ar-AE' // United Arab Emirates
  | 'ar-DZ' // Algeria
  | 'ar-EG' // Egypt
  | 'ar-SA' // Saudi Arabia
  | 'bn-BD' // Bangladesh
  | 'cs-CZ' // Czech Republic
  | 'da-DK' // Denmark
  | 'de-AT' // Austria
  | 'de-CH' // Switzerland
  | 'de-DE' // Germany
  | 'en-AU' // Australia
  | 'en-CA' // Canada
  | 'en-GB' // United Kingdom
  | 'en-GH' // Ghana
  | 'en-KE' // Kenya
  | 'en-NG' // Nigeria
  | 'en-NZ' // New Zealand
  | 'en-US' // United States
  | 'en-ZA' // South Africa
  | 'en-ZW' // Zimbabwe
  | 'es-AR' // Argentina
  | 'es-CL' // Chile
  | 'es-CO' // Colombia
  | 'es-ES' // Spain
  | 'es-MX' // Mexico
  | 'fa-AF' // Afghanistan
  | 'fil-PH' // Philippines
  | 'fi-FI' // Finland
  | 'fr-BE' // Belgium
  | 'fr-FR' // France
  | 'hi-IN' // India
  | 'id-ID' // Indonesia
  | 'it-IT' // Italy
  | 'ja-JP' // Japan
  | 'ko-KR' // South Korea
  | 'nl-BE' // Belgium (Dutch)
  | 'nl-NL' // Netherlands
  | 'no-NO' // Norway
  | 'pl-PL' // Poland
  | 'pt-AO' // Angola
  | 'pt-BR' // Brazil
  | 'ru-RU' // Russia
  | 'sq-AL' // Albania
  | 'sv-SE' // Sweden
  | 'th-TH' // Thailand
  | 'tr-TR' // Turkey
  | 'ur-PK' // Pakistan
  | 'vi-VN' // Vietnam
  | 'zh-CN' // China
  | 'zh-HK' // Hong Kong
  | 'zh-TW'; // Taiwan

type CountryCode =
  | 'Afghanistan'
  | 'Albania'
  | 'Algeria'
  | 'Angola'
  | 'Argentina'
  | 'Australia'
  | 'Austria'
  | 'Bangladesh'
  | 'Belgium'
  | 'Brazil'
  | 'Canada'
  | 'Chile'
  | 'China'
  | 'Colombia'
  | 'Czech Republic'
  | 'Denmark'
  | 'Egypt'
  | 'Ethiopia'
  | 'Finland'
  | 'France'
  | 'Germany'
  | 'Ghana'
  | 'India'
  | 'Indonesia'
  | 'Italy'
  | 'Japan'
  | 'Kenya'
  | 'Mexico'
  | 'Netherlands'
  | 'New Zealand'
  | 'Nigeria'
  | 'Norway'
  | 'Pakistan'
  | 'Philippines'
  | 'Poland'
  | 'Russia'
  | 'Saudi Arabia'
  | 'South Africa'
  | 'South Korea'
  | 'Spain'
  | 'Sweden'
  | 'Switzerland'
  | 'Thailand'
  | 'Turkey'
  | 'United Arab Emirates'
  | 'United Kingdom'
  | 'United States'
  | 'Vietnam'
  | 'Zimbabwe';

export type CountryCurrencyLocale = {
  country: CountryCode;
  currency: CurrencyCode;
  locale: LocaleCode;
};
export const country: CountryCode = 'United States';
