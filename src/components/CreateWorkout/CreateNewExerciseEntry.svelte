<script lang="ts">
	import { entryNumberStore } from '../../stores';
	export let exerciseName: string = '';
	export let instructions: string = '';
</script>

<div class="p-5 md:max-w-2xl">
	<div class="bg-white border-gray-200 border shadow-sm p-5 w-full rounded">
		<div class="flex flex-col">
			<div class="flex pt-2 pb-3 items-center">
				<div class="bg-[#0496ff] w-8 h-8 text-white items-center flex justify-center rounded-sm">
					<p class="font-sofia text-xl font-semibold">{$entryNumberStore}</p>
				</div>
				<label class="text-xl font-medium pl-2 whitespace-nowrap" for="exercise-name-input">
					Exercise name</label
				>
			</div>
			<input
				class="bg-slate-100 rounded h-8 w-full focus:outline-none px-2 font-medium"
				bind:value={exerciseName}
				type="text"
				id="exercise-name-input"
			/>
		</div>
		<div class="instructions-container">
			<label class="block py-2 text-xl" for="instructions-input">Instructions</label>
			<textarea
				class="bg-slate-100 rounded h-28 resize-none w-full p-2 focus:outline-none"
				bind:value={instructions}
				id="instructions-input"
			/>
		</div>
	</div>
</div>
