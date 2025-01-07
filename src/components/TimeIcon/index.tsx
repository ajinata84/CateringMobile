import { LucideSun, LucideMoon, LucideSunrise } from "lucide-react";
import React from "react";

interface TimeIconProps {
  hour: number;
  size?: number;
}

export default function TimeIcon({ hour, size = 15 }: TimeIconProps) {
  if (hour < 10) {
    return <LucideSunrise size={size} color="#E8751A" />;
  } else if (hour < 18) {
    return <LucideSun size={size} color="#FFD700" />;
  } else {
    return <LucideMoon size={size} color="#6A5ACD" />;
  }
}