<script lang="ts">
	import Calendar from './Calendar.svelte';
	import AddEventModal from './AddEventModal.svelte';
	export let data;

	const calendarEvents = data.data;
</script>

<div class="relative flex w-full items-center flex-col md:h-full p-2 md:p-5">
	<AddEventModal />
	<Calendar {calendarEvents} />
</div>
