export interface EventConfig {
  title: string,
  date: string,
  location: string,
  description?: string,
}

export interface Lesson {
  path: string,
  course: string,
  name: string,
}

export interface Config {
  hidePageProgress: boolean,
  events: EventConfig[],
  lessons: Lesson[],
}
