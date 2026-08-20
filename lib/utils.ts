import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string): string {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/Gym")) {
      return `/Gym${cleanPath}`;
    }
    return cleanPath;
  }
  
  const isProd = process.env.NODE_ENV === "production";
  return isProd ? `/Gym${cleanPath}` : cleanPath;
}
