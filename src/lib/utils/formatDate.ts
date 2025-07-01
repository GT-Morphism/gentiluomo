export function formatDate(
  date: string,
  options: {
    locale: string;
    dateStyle: Intl.DateTimeFormatOptions["dateStyle"];
  } = {
    locale: "de",
    dateStyle: "medium",
  },
) {
  const formattedDate = new Intl.DateTimeFormat(options.locale, {
    dateStyle: options.dateStyle,
  }).format(new Date(date));

  return formattedDate;
}
