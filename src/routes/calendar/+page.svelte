<script lang="ts">
	import Calendar from './Calendar.svelte';
	import AddEventModal from './AddEventModal.svelte';
</script>

<div class="relative grid md:h-full place-items-center p-2 pt-5 md:p-5">
	<AddEventModal />
	<Calendar />
</div>
