import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(raw: string) {
  // Returns display format: +971 52 642 6161
  return raw.replace(/(\+971)(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}
