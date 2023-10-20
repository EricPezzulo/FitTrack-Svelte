<script lang="ts">
	import CalendarRow from './CalendarRow.svelte';
	import type { Workout } from '$lib/typings';
	import type { ObjectId } from 'mongodb';
	import { onMount } from 'svelte';
	import { month } from './calendarStore';
	import CalendarNavigation from './CalendarNavigation.svelte';
	import { writable } from 'svelte/store';

	export let calendarEvents: calendarEventsType;
	let calendar = writable(calendarEvents);
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

	type calendarEventsType = { date: string; userId: string; _id: ObjectId; workoutId: string }[];
	type DayType = { day: number; paddingDate: boolean; workoutId: string | undefined | null };
	let daysInMonth: number,
		lastDayLastMonth: number,
		monthEndDayOfWeek: number,
		paddingEndNumber: number,
		monthStartDayOfWeek: number,
		paddingStartNumber: number,
		startLastMonthDays: number,
		paddingStart: DayType[],
		paddingEnd: DayType[],
		days: DayType[] = [];
	function formatDate(d: number): string {
		return d.toString().padStart(2, '0');
	}

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
				const dayNumber = i + 1;
				const prevMonth = $month;
				const dateStr = `${formatDate(year)}/${formatDate(prevMonth)}/${formatDate(dayNumber)}`;
				return {
					day: startLastMonthDays + i,
					workoutId: null,
					paddingDate: true,
					startPadding: true,
					date: dateStr
				};
			});

		paddingEnd = Array(paddingEndNumber)
			.fill(null)
			.map((_, i) => {
				const dayNumber = i + 1;
				const nextMonth = $month + 2;
				const dateStr = `${formatDate(year)}/${formatDate(nextMonth)}/${formatDate(dayNumber)}`;
				return {
					day: i + 1,
					workoutId: null,
					paddingDate: true,
					endPadding: true,
					date: dateStr
				};
			});
		let originalMonthDays = Array(daysInMonth)
			.fill(null)
			.map((_, i) => {
				const dayNumber = i + 1;
				const currentMonth = $month + 1;
				const dateStr = `${year}/${formatDate(currentMonth)}/${formatDate(dayNumber)}`;

				const matchingEvent:
					| {
							date: string;
							_id: ObjectId;
							userId: string;
							workoutId: string;
					  }
					| undefined = $calendar.find((event) => dateStr === event.date);

				if (matchingEvent) {
					return {
						day: i + 1,
						workoutId: matchingEvent.workoutId,
						paddingDate: false,
						date: dateStr
					};
				}

				return {
					day: i + 1,
					workoutId: null,
					paddingDate: false,
					date: dateStr
				};
			});

		days = [...paddingStart, ...originalMonthDays, ...paddingEnd];
	}
	function paginateNextMonth() {
		if ($month < 11) {
			++$month;
			fetchDataForMonth(year, $month + 1);
			buildCalendar();
		}
	}

	function paginatePrevMonth() {
		if ($month > 0) {
			--$month;
			fetchDataForMonth(year, $month + 1);
			buildCalendar();
		}
	}

	async function fetchDataForMonth(year: number, month: number) {
		const response = await fetch(`/calendar/${year}/${month}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		$calendar = await response.json();
		return $calendar;
	}
	onMount(() => {
		$calendar = calendarEvents;
		buildCalendar();
	});

	// udpate on store change
	$: currentMonth = months[$month];
	$: if ($calendar) buildCalendar();
	$: console.log(days);
	// $: console.log(calendarEvents);
	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
</script>

<table
	class="flex flex-col border-collapse w-full outline outline-1 outline-slate-300 bg-white rounded-lg max-w-4xl"
>
	<thead>
		<CalendarNavigation {paginatePrevMonth} {paginateNextMonth} {currentMonth} {year} />

		<tr class="grid grid-cols-7 border-b">
			{#each daysOfWeek as weekday}<th class="p-2 text-sm md:text-base">{weekday}</th>{/each}
		</tr>
	</thead>
	<tbody class="outline-t-0 outline-1 grid grid-rows-7 bg-white outline-slate-200 rounded-lg">
		<CalendarRow {paginateNextMonth} {paginatePrevMonth} days={days.slice(0, 7)} />
		<CalendarRow days={days.slice(7, 14)} />
		<CalendarRow days={days.slice(14, 21)} />
		<CalendarRow days={days.slice(21, 28)} />
		<CalendarRow days={days.slice(28, 35)} {paginateNextMonth} {paginatePrevMonth} />
		<CalendarRow days={days.slice(35, 42)} {paginateNextMonth} {paginatePrevMonth} />
	</tbody>
</table>
