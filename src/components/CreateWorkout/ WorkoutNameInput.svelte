<script lang="ts">
	import { workoutNameStore } from '../../stores';
</script>

<div class="pt-10 p-5 md:max-w-2xl">
	<div class="bg-white border-gray-200 border shadow-sm p-5 w-full rounded">
		<label class="text-lg" for="workout-name-input">Workout Name</label>
		<input
			class="items-center h-8 flex bg-slate-100 rounded px-2 w-full focus:outline-0"
			type="text"
			id="workout-name-input"
			bind:value={$workoutNameStore}
		/>
	</div>
</div>
