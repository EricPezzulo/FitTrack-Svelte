<script>
	import CalendarRow from './CalendarRow.svelte';

	let date = new Date();
	let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	let monthStartDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

	let days = Array(daysInMonth)
		.fill(null)
		.map((day, i) => i + 1);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	console.log(days);
</script>

<table
	class="flex flex-col border-collapse w-full outline outline-1 outline-slate-300 bg-white rounded-lg max-w-3xl"
>
	<thead>
		<tr>
			<th class="font-semibold text-xl md:text-2xl pl-3 pt-3">October</th>
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
		<CalendarRow {days} fromRange={28} toRange={31} />
	</tbody>
</table>
