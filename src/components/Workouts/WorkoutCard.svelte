<script lang="ts">
	import type { ExerciseType } from '$lib/typings';

	type Workout = {
		workoutName: string;
		exercises: ExerciseType[];
	};
	export let workout: Workout;
</script>

<div class="p-2">
	<div
		class="bg-white max-h-64 border broder-slate-200 rounded w-full sm:max-w-sm p-5 cursor-pointer"
	>
		<div>
			<p class="text-xl font-bold pb-3">{workout.workoutName}</p>

			<hr class="border-1 border-slate-200 pb-3" />
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
