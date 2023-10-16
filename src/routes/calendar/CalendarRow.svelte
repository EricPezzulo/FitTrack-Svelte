<script lang="ts">
	import { calendarModalStore } from '../../stores';

	export let days: number[];
	export let fromRange: number;
	export let toRange: number;

	let dateData: string = '';
	function openModal() {
		calendarModalStore.toggle();
	}
</script>

<tr class="flex">
	<!--  if last row dont render bottom border -->
	{#each days.slice(fromRange, toRange) as day}
		{#if toRange === 31}
			<td
				on:click={openModal}
				class="group text-xs h-20 w-full border-r last:border-r-0 hover:bg-gray-100 first:hover:rounded-bl-lg last:hover:rounded-br-lg duration-75 ease-in-out"
			>
				<p class="pl-2 pt-2 duration-75 ease-in-out text-gray-600 group-hover:text-black">
					{day}
				</p>
				<div class="h-12 overflow-y-auto no-scrollbar">
					<p class="pl-2 md:p-2 group-hover:text-black text-gray-600">
						{dateData}
					</p>
				</div>
			</td>
		{:else}
			<td
				on:click={openModal}
				class="group text-xs h-20 w-full border-b border-r last:border-r-0 hover:bg-gray-100 duration-75 ease-in-out"
			>
				<p class="pl-2 pt-2 duration-75 ease-in-out text-gray-600 group-hover:text-black">
					{day}
				</p>
				<div class="h-12 overflow-y-auto no-scrollbar">
					<p class="pl-2 md:p-2 group-hover:text-black text-gray-600">
						{dateData}
					</p>
				</div>
			</td>
		{/if}
	{/each}
</tr>
