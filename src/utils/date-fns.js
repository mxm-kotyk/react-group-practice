import { formatDistanceToNow } from 'date-fns';

export const time = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: false });
};
