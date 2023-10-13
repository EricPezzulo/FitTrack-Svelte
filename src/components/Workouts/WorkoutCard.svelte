<script lang="ts">
	import type { Workout } from '$lib/typings';
	import Icon from '@iconify/svelte';
	import { itemsStore } from '../../stores';
	import { fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let workout: Workout;

	let optionsMenuVisable = false;

	function handleToggleOptions() {
		optionsMenuVisable = !optionsMenuVisable;
	}
	let id: string = workout._id;
	async function deleteWorkout(id: string) {
		try {
			const response = await fetch(`/workouts/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				console.error('could not delete');
			} else {
				console.log(`${workout} deleted`);
				$itemsStore = $itemsStore.filter((item: { _id: string }) => item._id !== id);
			}
		} catch (error) {
			console.error('An error occured', error);
		}
	}
</script>

<div out:fly={{ y: 200, duration: 300 }} class="p-2">
	<div class="relative bg-white max-h-64 border broder-slate-200 rounded w-full sm:max-w-sm p-5">
		<div>
			<div class="flex items-center justify-between pb-2">
				<p class="text-xl font-bold">{workout.workoutName}</p>
				<div class="group hover:bg-slate-100 p-1 rounded duration-100 ease-in-out">
					<button
						on:click={handleToggleOptions}
						class="block text-slate-300 group-hover:text-slate-600 duration-100 ease-in-out cursor-pointer"
						><Icon height="20px" width="20px" icon="tabler:dots-vertical" />
					</button>
				</div>
				{#if optionsMenuVisable}
					<ul
						in:fade={{ duration: 150 }}
						out:scale={{ duration: 300, start: 0.5, easing: quintOut }}
						class="absolute bg-white border border-slate-200 rounded-b shadow z-[1000] right-4 top-14 py-2 w-28"
					>
						<a href={`/workouts/${workout._id}`}>
							<li
								class="group flex items-center cursor-pointer hover:bg-blue-500 hover:text-white duration-100 ease-in-out pl-2 py-1"
							>
								<span class="text-black group-hover:text-white pr-1 duration-100 ease-in-out">
									<Icon icon="tabler:edit" height="18px" />
								</span>
								<p class="block">Edit</p>
							</li></a
						>
						<hr class="mx-3" />
						<li
							class="group flex items-center cursor-pointer hover:bg-blue-500 hover:text-white duration-100 ease-in-out py-1 pl-2"
						>
							<button class="flex items-center" on:click={() => deleteWorkout(id)}>
								<span class="text-black group-hover:text-white pr-1 duration-100 ease-in-out">
									<Icon icon="tabler:trash" height="18px" />
								</span>
								<p class="block">Delete</p>
							</button>
						</li>
						<hr class="mx-3" />
						<li
							class="group flex items-center cursor-pointer hover:bg-blue-500 hover:text-white duration-100 ease-in-out py-1 pl-2"
						>
							<button class="flex items-center">
								<span class="text-black group-hover:text-white pr-1 duration-100 ease-in-out">
									<Icon icon="material-symbols:save-outline" height="18px" />
								</span>
								<p class="block">Save</p>
							</button>
						</li>
					</ul>
				{/if}
			</div>
			<hr class="border-1 border-slate-200 mb-3 shadow-sm" />
			<ul class="overflow-y-auto no-scrollbar h-40">
				{#each workout.exercises as exercise, index}
					<li>
						<div class="flex items-start">
							<div class="bg-blue-500 rounded-sm w-5 h-5 flex items-center justify-center">
								<p class="text-white text-sm font-semibold">{index + 1}</p>
							</div>
							&nbsp;

							<p class="font-semibold">{exercise.exerciseName}</p>
						</div>
						<p class="pl-6 pb-2 text-sm h-auto resize-none whitespace-pre-line">
							{exercise.instructions}
						</p>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
