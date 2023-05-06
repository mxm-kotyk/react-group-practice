import { formatDistanceToNow, format } from 'date-fns';

export const time = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: false });
};
export const timeCrypto = date => {
  return format(new Date(date), "Pp");
};
