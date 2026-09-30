import { formatDate } from '@/utils/formatter';

export function sayHello(name: string): string {
  const timestamp = formatDate(new Date());
  return `${timestamp} Hello, ${name}!`;
}
