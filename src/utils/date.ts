// 5월 20일 (화) 오후 10:43
export function formatKoreanFullDateTime(date: Date): string {
  const formatString = new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);

  return formatString;
}

// 5월 20일 (화) 오후 10시
export function formatKoreanScheduleTime(date: Date): string {
  const formatString = new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    hour12: true,
  }).format(date);

  return formatString;
}

// 10:43 오후
export function formatKoreanTime(date: Date): string {
  const formatParts = new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).formatToParts(date);

  const hour = formatParts.find((part) => part.type === "hour")?.value;
  const minute = formatParts.find((part) => part.type === "minute")?.value;
  const dayPeriod = formatParts.find(
    (part) => part.type === "dayPeriod",
  )?.value;

  return `${hour}:${minute} ${dayPeriod}`;
}

export function formatMsToHMS(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
}

export function formatMsToHMSOrMS(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return hours > 0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
}
