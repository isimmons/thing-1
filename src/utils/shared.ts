import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const formatDate = (date: Date) =>
  `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
    date.getSeconds(),
  ).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}`

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
