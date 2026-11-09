import type { Config, EventConfig } from "./ConfigTypes";

const events: EventConfig[] = [
  {
    title: "Programming 101",
    date: "Monday, November 16th, 2026",
    location: "Catipillar Cafe",
    description: "Intro to Python",
  }
];

export const defaultConfig: Config = {
  hidePageProgress: true,
  events,
}
