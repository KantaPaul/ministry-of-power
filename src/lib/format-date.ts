import { isString } from "lodash";

export function formatDate(text: string) {
  if (!text && !isString(text)) {
    return "";
  }
  const date = new Date(text).toString();
  const day = new Date(date).getDate();
  const year = new Date(date).getFullYear();
  const month = new Date(date)?.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${monthNames[month]} ${day}, ${year}`;
}
