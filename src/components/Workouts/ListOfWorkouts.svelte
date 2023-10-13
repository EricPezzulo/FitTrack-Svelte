<script lang="ts">
	import WorkoutCard from './WorkoutCard.svelte';
	type PropType = {
		_id: string;
		workoutName: string;
		exercises: Exercise[];
	};

	type Exercise = {
		_id: string;
		exerciseName: string;
		instructions: string;
	};
	import { itemsStore } from '../../stores';
</script>

<div class="grid sm:p-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
	{#if $itemsStore.length === 0}
		<p>loading...</p>
	{/if}
	{#each $itemsStore as workout (workout._id)}
		<WorkoutCard {workout} />
	{/each}
</div>
