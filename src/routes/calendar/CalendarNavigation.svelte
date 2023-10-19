<script lang="ts">
	import Icon from '@iconify/svelte';
	export let paginateNextMonth: () => void = () => {};
	export let paginatePrevMonth: () => void = () => {};
	export let currentMonth: string;
	export let year: number;
</script>

<tr class="flex w-96 pl-3">
	<th class="font-semibold flex justify-between w-full text-xl md:text-2xl pt-3">
		<button
			on:click={paginatePrevMonth}
			class="flex items-center justify-center bg-slate-100 hover:bg-slate-200 duration-100 ease-in-out rounded w-10"
		>
			<span>
				<Icon icon="tabler:chevron-left" height="25px" />
			</span>
		</button>
		<p class="pt-1">
			{currentMonth}
			{year}
		</p>

		<button
			on:click={paginateNextMonth}
			class="flex justify-center items-center w-10 bg-slate-100 hover:bg-slate-200 duration-100 ease-in-out rounded"
		>
			<span>
				<Icon icon="tabler:chevron-right" height="25px" />
			</span>
		</button>
	</th>
</tr>
