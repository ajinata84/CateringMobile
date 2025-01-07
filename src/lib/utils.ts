import { Paket } from "@/types/interfaces";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRangeTimeString(hours: number[]) {
  if (!hours.length) return "";
  const minHour = Math.min(...hours);
  const maxHour = Math.max(...hours);
  return `${String(minHour).padStart(2, "0")}:00 - ${String(maxHour).padStart(
    2,
    "0"
  )}:00`;
}

export function getScheduleTimes(paket: Paket) {
  const morning: number[] = [];
  const day: number[] = [];
  const evening: number[] = [];

  paket.Schedules.forEach((schedule) => {
    const hour = parseInt(schedule.waktu.split(":")[0], 10);
    if (hour < 10) morning.push(hour);
    else if (hour < 18) day.push(hour);
    else evening.push(hour);
  });

  return {
    morning: getRangeTimeString(morning),
    day: getRangeTimeString(day),
    evening: getRangeTimeString(evening),
  };
}
