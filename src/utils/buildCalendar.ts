import type { Workout } from '$lib/typings';
import type { ObjectId } from 'mongodb';
import { writable } from 'svelte/store';

type calendarEventsType = { date: string; userId: string; _id: ObjectId; workout: Workout }[];
type DayType = { day: number; workoutName: string | null };

const year = new Date().getFullYear();
// let month = new Date().getMonth();
const initialState = {
	days: [] as DayType[],
	month: new Date().getMonth(),
	year: new Date().getFullYear()
};

export const calendarStore = writable(initialState);

let daysInMonth: number,
	lastDayLastMonth: number,
	monthEndDayOfWeek: number,
	paddingEndNumber: number,
	monthStartDayOfWeek: number,
	paddingStartNumber: number,
	startLastMonthDays: number,
	paddingStart: DayType[],
	paddingEnd: DayType[],
	allDays: DayType[],
	days: DayType[] = [];
// export function paginateNextMonth() {
// 		if (month < 11) {
// 			month = month += 1;
// 			buildCalendar(calendarEvents, ++month);
// 		}
// 	}
// 	export function paginatePrevMonth() {
// 		if (month > 0) {
// 			month = month -= 1;
// 			buildCalendar(calendarEvents, --month);
// 		}
// 	}

export function buildCalendar(calendarEvents: calendarEventsType, month: number) {
	// let month: number = new Date().getMonth();

	daysInMonth = new Date(year, month + 1, 0).getDate();
	lastDayLastMonth = new Date(year, month, 0).getDate();
	monthEndDayOfWeek = new Date(year, month + 1, 0).getDay();
	paddingEndNumber = 7 - (monthEndDayOfWeek + 1);
	monthStartDayOfWeek = new Date(year, month, 1).getDay();
	paddingStartNumber = monthStartDayOfWeek;
	startLastMonthDays = lastDayLastMonth - paddingStartNumber + 1;

	paddingStart = Array(paddingStartNumber)
		.fill(null)
		.map((_, i) => {
			return {
				day: startLastMonthDays + i,
				workoutName: null
			};
		});

	paddingEnd = Array(paddingEndNumber)
		.fill(null)
		.map((_, i) => {
			return {
				day: i + 1,
				workoutName: null
			};
		});
	allDays = [
		...paddingStart,
		...Array(daysInMonth)
			.fill(null)
			.map((_, i) => {
				return {
					day: i + 1,
					workoutName: null
				};
			}),
		...paddingEnd
	];
	days = allDays.map((day) => {
		const matchingEvent = calendarEvents.find(
			(event) => day.day === Number(event.date.split('/')[1])
		);
		if (matchingEvent) {
			return {
				...day,
				workoutName: matchingEvent.workout.workoutName
			};
		}
		calendarStore.update((state) => ({ ...state, days, month }));
		console.log(calendarStore);
		return day;
	});

	return {
		days,
		year,
		month
	};
}

export function paginateNextMonth(calendarEvents: calendarEventsType) {
	if ($month < 11) {
		const newMonth = $month + 1;
		buildCalendar(calendarEvents, newMonth);
	}
}

export function paginatePrevMonth(calendarEvents: calendarEventsType) {
	if ($month > 0) {
		const newMonth = $month - 1;
		buildCalendar(calendarEvents, newMonth);
	}
}
