<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from '../Elements/Button.svelte';
	import { onMount } from 'svelte';
	import {
		caloriesTargetColorStore,
		caloriesTargetStore,
		caloriesStore,
		proteinStore,
		proteinTargetColorStore,
		proteinTargetStore,
		carbohydratesStore,
		carbohydratesTargetColorStore,
		fatsStore,
		fatsTargetStore,
		fatsTargetColorStore,
		carbohydratesTargetStore
	} from '../../stores/macrosStores';
	export let macroName: string;
	let count: number = 0;

	const increment = (): void => {
		count = count + 1;
	};
	const decrement = (): void => {
		if (count === 0) return;
		count = count - 1;
	};

	let interval: ReturnType<typeof setInterval>;

	const startCountingUp = (): void => {
		interval = setInterval(() => count++, 100);
	};
	const startCountingDown = (): void => {
		if (count === 0) return;
		interval = setInterval(() => (count > 0 ? count-- : clearInterval(interval)), 100);
	};
	const stopCounting = (): void => {
		clearInterval(interval);
	};

	onMount(() => {
		return () => {
			clearInterval(interval);
		};
	});
	const updateMacros = () => {
		switch (macroName.toLowerCase()) {
			case 'calories':
				caloriesStore.increment(count);
				if ($caloriesStore >= $caloriesTargetStore) {
					caloriesTargetColorStore.satisfied();
				} else {
					caloriesTargetColorStore.unsatisfied();
				}
				count = 0;
				break;
			case 'protein':
				proteinStore.increment(count);
				if ($proteinStore >= $proteinTargetStore) {
					proteinTargetColorStore.satisfied();
				} else {
					proteinTargetColorStore.unsatisfied();
				}
				count = 0;
				break;
			case 'carbs':
				carbohydratesStore.increment(count);
				if ($carbohydratesStore >= $carbohydratesTargetStore) {
					carbohydratesTargetColorStore.satisfied();
				} else {
					carbohydratesTargetColorStore.unsatisfied();
				}
				count = 0;

				break;
			case 'fats':
				fatsStore.increment(count);
				if ($fatsStore >= $fatsTargetStore) {
					fatsTargetColorStore.satisfied();
				} else {
					fatsTargetColorStore.unsatisfied();
				}
				count = 0;
				break;
			default:
		}
	};
</script>

<div class="md:max-w-2xl bg-white border border-gray-200 p-5 rounded">
	<div>
		<label for="add-calorie-input" class="text-lg font-medium flex justify-center pb-2"
			>Add {macroName}</label
		>
	</div>

	<input
		class="border border-slate-200 bg-slate-100 w-full text-right rounded px-2 h-8 focus:outline-0"
		id="add-calorie-input"
		type="number"
		bind:value={count}
	/>
	<div class="flex pt-4 pb-2 place-content-end">
		<button
			on:click={increment}
			on:mousedown={startCountingUp}
			on:mouseup={stopCounting}
			on:mouseleave={stopCounting}
			class="pr-1"
		>
			<Button borderRadius="rounded" py="py-1">
				<span aria-labelledby="test" id="incrementButton">
					<Icon icon="tabler:chevron-up" height="20px" />
				</span>
			</Button>
		</button>
		<button
			on:click={decrement}
			on:mousedown={startCountingDown}
			on:mouseup={stopCounting}
			on:mouseleave={stopCounting}
		>
			<Button py="py-1" borderRadius="rounded">
				<span>
					<Icon icon="tabler:chevron-down" height="20px" />
				</span>
			</Button>
		</button>
		<button on:click={updateMacros}><Button>update</Button></button>
	</div>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
	}
</style>
