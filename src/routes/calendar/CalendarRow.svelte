<script lang="ts">
	import { calendarModalStore } from '../../stores';
	import { classNames } from '../../utils/classnames';
	type DayType = {
		day: number;
		paddingDate: boolean;
		workoutId: string | null | undefined;
		startPadding?: boolean;
		endPadding?: boolean;
		date?: string;
	};
	export let days: DayType[];

	export let paginateNextMonth: () => void = () => {};
	export let paginatePrevMonth: () => void = () => {};

	function openModal(dayObj: DayType) {
		calendarModalStore.toggle();

		calendarModalStore.findModalType(dayObj.workoutId);
	}
	function handlePaddingClick(dayObj: DayType) {
		if (dayObj.startPadding) {
			paginatePrevMonth();
		}
		if (dayObj.endPadding) {
			paginateNextMonth();
		}
	}

	let today = new Date().toLocaleDateString().split('/');
	let formatedDated = [today[2], today[0], today[1]].join('/');
</script>

<tr class="flex">
	{#each days as dayObj}
		{#if dayObj.paddingDate}
			<td
				on:click={() => handlePaddingClick(dayObj)}
				class={classNames(
					'group text-xs h-20 w-full  bg-slate-100 last:hover:rounded-br-lg duration-75 ease-in-out border-b border-r last:border-r-0 border-slate-200'
				)}
			>
				<!-- {#if dayObj.workoutId}
					<div class="hidden sm:block h-12 overflow-y-auto no-scrollbar sm:pl-2 pt-2">
						<p class="rounded w-fit md:p-0.5 group-hover:text-black text-slate-600">
							{dayObj.workoutId}
						</p>
					</div>
				{/if} -->

				<div>
					<p class="p-2 text-slate-500">
						{dayObj.day}
					</p>
				</div>
			</td>
		{:else}
			<td
				on:click={() => openModal(dayObj)}
				class={classNames(
					'group text-xs h-20 w-full  hover:bg-gray-100 first:hover:rounded-bl-lg last:hover:rounded-br-lg duration-75 ease-in-out border-b border-r last:border-r-0 border-slate-200'
				)}
			>
				{#if formatedDated === dayObj.date}
					<div
						class="flex items-center justify-center bg-blue-500 rounded-full w-6 h-6 m-1 duration-75 ease-in-out text-white shadow"
					>
						<span>
							{dayObj.day}
						</span>
					</div>
				{:else}
					<p class="pl-2 pt-2 w-5 h-5 duration-75 ease-in-out text-gray-600 group-hover:text-black">
						{dayObj.day}
					</p>
				{/if}

				{#if dayObj.workoutId}
					<div class="hidden sm:block h-12 overflow-y-auto no-scrollbar sm:pl-2 pt-2">
						<p class="rounded w-fit md:p-0.5 group-hover:text-black text-slate-600">
							{dayObj.workoutId}
						</p>
					</div>
				{/if}
			</td>
		{/if}
	{/each}
</tr>
