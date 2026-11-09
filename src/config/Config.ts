import { ConfigOverrides } from "./ConfigOverrides";

export interface EventConfig {
  title: string,
  date: string,
  location: string,
  description?: string,
}

const events: EventConfig[] = [
  {
    title: "Programming 101",
    date: "Monday, November 16th, 2026",
    location: "Catipillar Cafe",
    description: "Intro to Python",
  }
];

export interface Config {
  hidePageProgress: boolean,
  events: EventConfig[],
}

export const defaultConfig: Config = {
  hidePageProgress: true,
  events,
}

export const config: Config = {
  ...defaultConfig,
  ...ConfigOverrides,
};
