<script lang="ts">
	import Icon from '@iconify/svelte';
	import { exerciseList } from '../../stores';

	const remove = (id: string): void => {
		let updatedList = $exerciseList.exercises.filter((elem) => elem._id !== id);
		$exerciseList.exercises = updatedList;
	};
</script>

{#each $exerciseList.exercises as exercise, index (exercise._id)}
	<div class="p-5 md:max-w-2xl">
		<div class="bg-white rounded p-5 shadow border border-gray-200">
			<div class="flex items-center pb-3">
				<div class="flex items-center justify-center bg-[#0496ff] w-8 h-8 text-white rounded-sm">
					<p class="font-sofia text-xl font-semibold">{index + 1}</p>
				</div>
				<div class="pl-2 flex-1 flex">
					<input
						class="px-2 h-8 focus:border-none rounded duration-150 ease-in focus:outline-none active:bg-slate-100 focus:bg-slate-100 hover:bg-slate-100 w-full"
						type="text"
						bind:value={exercise.exerciseName}
					/>
				</div>
				<button
					on:click={() => remove(exercise._id)}
					type="button"
					class="group flex items-center justify-center hover:bg-slate-100 h-8 w-8 rounded duration-150 ease-in cursor-pointer"
				>
					<span class="text-gray-400 group-hover:text-red-400 duration-150 ease-in">
						<Icon icon="tabler:trash" />
					</span>
				</button>
			</div>
			<textarea
				class="bg-white rounded h-28 resize-none w-full p-2 border duration-150 border-gray-100 hover:border-gray-300 focus:border-gray-400 focus:outline-0"
				bind:value={exercise.instructions}
			/>
		</div>
	</div>
{/each}
