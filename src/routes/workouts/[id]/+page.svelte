<script lang="ts">
	export let data;
	const { workoutName, exercises, _id: id } = data.data;
	console.log(data.data.exercises);
</script>

<div>
	<div>
		<p class="text-3xl">{workoutName}</p>
		<p class="font-bold">id: <span class="font-normal">{id}</span></p>
		<ul>
			{#each exercises as exercise}
				<li>
					<p>
						{exercise.exerciseName}
					</p>

					<p>
						{exercise.instructions}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
