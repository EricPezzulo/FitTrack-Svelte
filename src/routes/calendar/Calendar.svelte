<script lang="ts">
	import CalendarRow from './CalendarRow.svelte';
	import type { Workout } from '$lib/typings';
	import type { ObjectId } from 'mongodb';
	import { writable } from 'svelte/store';

	export let calendarEvents: { date: string; userId: string; _id: ObjectId; workout: Workout }[];
	export let month = writable<number>(new Date().getMonth());

	let year = new Date().getFullYear();
	const months: { [key: number]: string } = {
		0: 'January',
		1: 'Febuary',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December'
	};

	type calendarEventsType = { date: string; userId: string; _id: ObjectId; workout: Workout }[];
	type DayType = { day: number; workoutName: string | null };
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

	function buildCalendar() {
		daysInMonth = new Date(year, $month + 1, 0).getDate();
		lastDayLastMonth = new Date(year, $month, 0).getDate();
		monthEndDayOfWeek = new Date(year, $month + 1, 0).getDay();
		paddingEndNumber = 7 - (monthEndDayOfWeek + 1);
		monthStartDayOfWeek = new Date(year, $month, 1).getDay();
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
				// console.log(matchingEvent.workout);
				return {
					...day,
					workoutName: matchingEvent.workout.workoutName
				};
			}
			return day;
		});
		return days;
	}
	function paginateNextMonth() {
		if ($month < 11) {
			++$month;
			buildCalendar();
		}
	}

	function paginatePrevMonth() {
		if ($month > 0) {
			--$month;
			buildCalendar();
		}
	}
	buildCalendar();
	$: console.log(days);
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<table
	class="flex flex-col border-collapse w-full outline outline-1 outline-slate-300 bg-white rounded-lg max-w-4xl"
>
	<thead>
		<tr>
			<th class="font-semibold text-xl md:text-2xl pl-3 pt-3">
				<button on:click={paginatePrevMonth} class="text-sm">prev</button>
				{months[$month]}
				{year}
				<button on:click={paginateNextMonth} class="text-sm">next</button>
			</th>
		</tr>
		<tr class="grid grid-cols-7 border-b">
			{#each daysOfWeek as weekday}<th class="p-2 text-sm md:text-base">{weekday}</th>{/each}
		</tr>
	</thead>
	<tbody class="outline-t-0 outline-1 grid grid-rows-7 bg-white outline-slate-200 rounded-lg">
		<CalendarRow {days} fromRange={0} toRange={7} />
		<CalendarRow {days} fromRange={7} toRange={14} />
		<CalendarRow {days} fromRange={14} toRange={21} />
		<CalendarRow {days} fromRange={21} toRange={28} />
		<CalendarRow {days} fromRange={28} toRange={35} />
		<CalendarRow {days} fromRange={35} toRange={42} />
	</tbody>
</table>
