<script lang="ts">
	import Calendar from './Calendar.svelte';
	import AddEventModal from './AddEventModal.svelte';
	import { onMount } from 'svelte';
	export let data;

	const calendarEvents = data.data;
	async function test() {
		const res = await fetch(`/calendar/`);
		const data = await res.json();
	}
	onMount(() => {
		document.cookie = `userId=${data.session?.user?.userId}; path=/; max-age=3600`;
	});
</script>

<div class="relative flex w-full items-center flex-col md:h-full p-2 md:p-5">
	<AddEventModal />
	<Calendar {calendarEvents} />
</div>
