export enum DaysOfWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export type DaysOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export interface DailyWorkingIntervals {
  startTime: string;
  endTime: string;
}

export interface WorkingHours {
  day: DaysOfWeek;
  times: DailyWorkingIntervals[];
}

export enum KitchenType {
  'PIZZA' = 'Pizza',
  'ASIAN' = 'Asian',
  'BURGER' = 'Burger',
  'SALAD' = 'Salad',
  'FISH' = 'Fish',
  'SOUP' = 'Soup',
  'FAST_FOOD' = 'Fast Food',
  'DESSERT' = 'Dessert',
}

export interface Kitchen {
  id: string;
  name: string;
  types: KitchenType[];
  workingHours: WorkingHours[];
  rating: number;
  kitchenImage: string;
  address: string;
  distance?: number;
  companyAddress: string;
  companyCUI: string;
  companyName: string;
  companyRegCom: string;
  contactEmail: string;
  contactPhone: string;
}
