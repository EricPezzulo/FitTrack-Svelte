<script lang="ts">
	import { calendarModalStore } from '../../stores';
	import { classNames } from '../../utils/classnames';
	type DayType = { day: number; workoutName: string | null };
	export let days: DayType[];
	export let fromRange: number;
	export let toRange: number;

	function openModal() {
		calendarModalStore.toggle();
	}
	// console.log(days);
</script>

<tr class="flex">
	<!--  if last row dont render bottom border -->

	{#each days.slice(fromRange, toRange) as dayObj}
		<td
			on:click={openModal}
			class={classNames(
				'group text-xs h-20 w-full  hover:bg-gray-100 first:hover:rounded-bl-lg last:hover:rounded-br-lg duration-75 ease-in-out border-b border-r last:border-r-0 border-slate-200'
			)}
		>
			{#if dayObj.workoutName}
				<p
					class="flex items-center justify-center bg-blue-500 rounded-full w-5 h-5 ml-1 mt-1 duration-75 ease-in-out text-white"
				>
					{dayObj.day}
				</p>
			{:else}
				<p class="pl-2 pt-2 w-5 h-5 duration-75 ease-in-out text-gray-600 group-hover:text-black">
					{dayObj.day}
				</p>
			{/if}

			{#if dayObj.workoutName}
				<div class="hidden sm:block h-12 overflow-y-auto no-scrollbar sm:pl-2 pt-2">
					<p class="rounded w-fit md:p-0.5 group-hover:text-black text-slate-600">
						{dayObj.workoutName}
					</p>
				</div>
			{/if}
		</td>
	{/each}
</tr>
