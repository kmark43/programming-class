export interface EventConfig {
  title: string,
  date: string,
  location: string,
  description?: string,
}

export interface Config {
  hidePageProgress: boolean,
  events: EventConfig[],
}