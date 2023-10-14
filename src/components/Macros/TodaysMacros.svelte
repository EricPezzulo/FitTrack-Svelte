<script lang="ts">
	import { classNames } from '../../utils/classnames';
	import {
		caloriesTargetColorStore,
		caloriesStore,
		caloriesTargetStore,
		proteinStore,
		proteinTargetStore,
		proteinTargetColorStore,
		carbohydratesStore,
		carbohydratesTargetStore,
		carbohydratesTargetColorStore,
		fatsStore,
		fatsTargetStore,
		fatsTargetColorStore
	} from '../../stores/macrosStores';

	const isFatsTargetSatisfied = (): void => {
		if ($fatsStore >= $fatsTargetStore) {
			fatsTargetColorStore.satisfied();
		} else {
			fatsTargetColorStore.unsatisfied();
		}
	};
	const isCalsTargetSatisfied = (): void => {
		if ($caloriesStore >= $caloriesTargetStore) {
			caloriesTargetColorStore.satisfied();
		} else {
			caloriesTargetColorStore.unsatisfied();
		}
	};
	const isProteinTargetSatisfied = (): void => {
		if ($proteinStore >= $proteinTargetStore) {
			proteinTargetColorStore.satisfied();
		} else {
			proteinTargetColorStore.unsatisfied();
		}
	};
	const isCarbohydratesTargetSatisfied = (): void => {
		if ($carbohydratesStore >= $carbohydratesTargetStore) {
			carbohydratesTargetColorStore.satisfied();
		} else {
			carbohydratesTargetColorStore.unsatisfied();
		}
	};
</script>

<div class="p-5 md:max-w-2xl">
	<div class="bg-white rounded p-6 border border-slate-200 shadow-sm">
		<p class="text-lg font-semibold pb-2">Todays Macros</p>
		<div class="flex items-end">
			<label
				for="calorie-input"
				class={classNames(
					$caloriesStore >= $caloriesTargetStore ? 'text-gray-600' : '',
					'whitespace-nowrap duration-150 ease-in-out'
				)}
			>
				Calories
			</label>
			<div class="flex flex-1 justify-end">
				<div
					class="flex bg-slate-100 h-6 items-center place-self-end rounded px-1 border border-slate-200"
				>
					<input
						id="calorie-input"
						type="number"
						class="bg-transparent appearance-none block rounded place-self-end w-14 text-sm h-6 pr-2 text-right focus:outline-0"
						bind:value={$caloriesStore}
						on:input={isCalsTargetSatisfied}
					/>
					<p class={`${$caloriesTargetColorStore} font-semibold text-sm duration-150 ease-in-out`}>
						<span class="text-slate-600">/ </span>{$caloriesTargetStore}g
					</p>
				</div>
			</div>
		</div>
		<div class="flex pt-2">
			<label
				for="protein-input"
				class={classNames(
					$proteinStore >= $proteinTargetStore ? 'text-gray-600' : '',
					'whitespace-nowrap duration-150 ease-in-out'
				)}
			>
				Protein
			</label>
			<div class="flex flex-1 justify-end">
				<div
					class="flex bg-slate-100 h-6 items-center place-self-end rounded px-1 border border-slate-200"
				>
					<input
						type="number"
						id="protein-input"
						class="bg-transparent appearance-none block rounded place-self-end w-14 text-sm h-6 pr-2 text-right focus:outline-0"
						bind:value={$proteinStore}
						on:input={isProteinTargetSatisfied}
					/>
					<p class={`${$proteinTargetColorStore} font-semibold text-sm duration-150 ease-in-out`}>
						<span class="text-slate-600">/ </span>{$proteinTargetStore}g
					</p>
				</div>
			</div>
		</div>
		<div class="flex pt-2">
			<label
				for="carbohydrates-input"
				class={classNames(
					$carbohydratesStore >= $carbohydratesTargetStore ? 'text-gray-600' : '',
					'whitespace-nowrap duration-150 ease-in-out'
				)}
			>
				Carbohydrates
			</label>
			<div class="flex flex-1 justify-end">
				<div
					class="flex bg-slate-100 h-6 items-center place-self-end rounded px-1 border border-slate-200"
				>
					<input
						id="carbohydrates-input"
						type="number"
						class="bg-transparent appearance-none block rounded place-self-end w-14 text-sm h-6 pr-2 text-right focus:outline-0"
						bind:value={$carbohydratesStore}
						on:input={isCarbohydratesTargetSatisfied}
					/>
					<p
						class={`${$carbohydratesTargetColorStore} font-semibold text-sm duration-150 ease-in-out`}
					>
						<span class="text-slate-600">/ </span>{$carbohydratesTargetStore}g
					</p>
				</div>
			</div>
		</div>
		<div class="flex pt-2">
			<label
				for="fats-input"
				class={classNames(
					$fatsStore >= $fatsTargetStore ? 'text-gray-600' : '',
					'whitespace-nowrap duration-150 ease-in-out'
				)}
			>
				Fats
			</label>
			<div class="flex flex-1 justify-end">
				<div
					class="flex bg-slate-100 h-6 items-center place-self-end rounded px-1 border border-slate-200"
				>
					<input
						id="fats-input"
						type="number"
						class="bg-transparent appearance-none block rounded place-self-end w-14 text-sm h-6 pr-2 text-right focus:outline-0"
						bind:value={$fatsStore}
						on:input={isFatsTargetSatisfied}
					/>
					<p class={`${$fatsTargetColorStore} font-semibold text-sm duration-150 ease-in-out`}>
						<span class="text-slate-600">/ </span>{$fatsTargetStore}g
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		display: none;
	}
</style>
