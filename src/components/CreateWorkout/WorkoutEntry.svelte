<script lang="ts">
	import type { Exercise, ExercisesType } from '$lib/typings';
	import ExerciseEntry from './ExerciseEntry.svelte';
	import ExerciseEntryEdit from './ExerciseEntryEdit.svelte';
	export let exercises: ExercisesType;
	export let exercise: Exercise;
	export let index: number;

	let exerciseComplete = false;
	let edit = false;
</script>

<li class="entry-wrapper">
	<div class="item">
		{#if !edit}
			<ExerciseEntry {index} bind:exercise bind:edit bind:exerciseComplete />
		{:else}
			<ExerciseEntryEdit {index} bind:exercise bind:edit bind:exerciseComplete bind:exercises />
		{/if}
	</div>
</li>

<style>
	.entry-wrapper {
		padding-block: 8px;
		width: 50%;
	}
	.item {
		padding: 25px;
		background-color: #ffffff;
		/* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15); */
		border: 1px solid rgb(230, 230, 230);
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		height: auto;
	}
	@media screen and (max-width: 1024px) {
		.entry-wrapper {
			width: 700px;
		}
	}

	@media screen and (max-width: 780px) {
		.entry-wrapper {
			width: 75%;
		}
	}
	@media screen and (max-width: 600px) {
		.entry-wrapper {
			width: 90%;
		}
	}
</style>
