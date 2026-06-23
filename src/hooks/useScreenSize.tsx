import { useSyncExternalStore } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

function getDeviceType(): DeviceType {
  const width = window.innerWidth;

  if (width <= 768) return "mobile";
  if (width <= 1024) return "tablet";

  return "desktop";
}

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);

  return () => window.removeEventListener("resize", callback);
}

export default function useScreenSize(): DeviceType {
  return useSyncExternalStore(subscribe, getDeviceType, () => "desktop");
}
