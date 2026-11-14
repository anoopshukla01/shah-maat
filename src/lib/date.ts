// Shah-Maat Date & Time formatting utilities for Asia/Kolkata (IST)

export const REFERENCE_DATE = new Date('2026-11-02T19:36:04+05:30');

export function formatISTDate(dateInput: string | Date): string {
  const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(d);
}

export function formatISTTime(dateInput: string | Date): string {
  const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(d);
}

export function formatISTRange(startInput: string | Date, endInput: string | Date): string {
  const start = typeof startInput === 'string' ? new Date(startInput) : startInput;
  const end = typeof endInput === 'string' ? new Date(endInput) : endInput;

  const dateStr = formatISTDate(start);
  const startTime = formatISTTime(start);
  const endTime = formatISTTime(end);

  return `${dateStr} · ${startTime} - ${endTime} IST`;
}

export function getCountdownParts(targetInput: string | Date, currentInput: string | Date = REFERENCE_DATE) {
  const target = typeof targetInput === 'string' ? new Date(targetInput).getTime() : targetInput.getTime();
  const current = typeof currentInput === 'string' ? new Date(currentInput).getTime() : currentInput.getTime();
  const diff = target - current;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
}

