<script lang="ts">
	import AddMacros from '../../components/Macros/AddMacros.svelte';
	import TodaysMacros from '../../components/Macros/TodaysMacros.svelte';
	import {
		caloriesTargetColorStore,
		caloriesStore,
		proteinStore,
		proteinTargetColorStore,
		carbohydratesStore,
		carbohydratesTargetColorStore,
		fatsStore,
		fatsTargetColorStore
	} from '../../stores/macrosStores';

	let today = new Date();

	function resetMacros() {
		caloriesStore.reset();
		caloriesTargetColorStore.reset();
		proteinStore.reset();
		proteinTargetColorStore.reset();
		carbohydratesStore.reset();
		carbohydratesTargetColorStore.reset();
		fatsStore.reset();
		fatsTargetColorStore.reset();
	}
</script>

<svelte:head>
	<title>Meal Planning</title>
	<meta name="description" content="Meal Planning" />
</svelte:head>

<div>
	<div>
		{today}
		<button class="px-3 py-1 rounded-md bg-blue-500 text-white" on:click={resetMacros}>
			Reset
		</button>
	</div>

	<TodaysMacros />
	<AddMacros />
</div>
