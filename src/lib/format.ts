import { APP_CURRENCY, APP_LOCALE } from "@/constants/app";

export function formatMoney(value: number): string {
  return `${value.toLocaleString(APP_LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${APP_CURRENCY}`;
}

export function formatDate(value: string | Date): string {
  const d = typeof value === "string" ? new Date(value) : value;
  return d.toLocaleDateString(APP_LOCALE);
}

export function formatMonthYear(value: Date = new Date()): string {
  return value.toLocaleDateString(APP_LOCALE, {
    month: "long",
    year: "numeric",
  });
}
