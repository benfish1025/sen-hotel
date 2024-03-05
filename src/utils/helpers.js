import { intlFormatDistance, parseISO } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
    intlFormatDistance(parseISO(dateStr), new Date(), {
    locale: 'zh-Hans-CN'
  })
    // .replace('about ', '')
    // .replace('in', '')
    // .replace('month', '月内到店 ');

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date();

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat(
    'zh-CN',
    {
      style: 'currency',
      currency: 'CNY',
      minimumFractionDigits: 1, // 设置最少保留一位小数
      maximumFractionDigits: 1 // 设置最多保留一位小数
    }).format(value);
