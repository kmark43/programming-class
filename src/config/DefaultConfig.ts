import type { Config, EventConfig, Lesson } from "./ConfigTypes";

const events: EventConfig[] = [
  {
    title: "Programming 101",
    date: "Monday, November 16th, 2026",
    location: "Catipillar Cafe",
    description: "Intro to Python",
  }
];

const lessons101: Lesson[] = [
  { path: '101/intro.md', course: '101', name: 'Intro' },
];

const lessons102: Lesson[] = [
];

const lessons103: Lesson[] = [
];

export const defaultConfig: Config = {
  hidePageProgress: true,
  lessons: { ...lessons101, ...lessons102, ...lessons103 },
  events,
}
