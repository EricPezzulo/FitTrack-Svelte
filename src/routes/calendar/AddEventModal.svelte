<script>
	import { fly } from 'svelte/transition';
	import { calendarModalStore } from '../../stores';
	import Icon from '@iconify/svelte';
</script>

{#if $calendarModalStore}
	<div
		in:fly={{ y: 400, duration: 400 }}
		out:fly={{ y: 400, duration: 400 }}
		class="absolute w-96 h-96 bg-white p-5 rounded outline outline-3 outline-slate-200 shadow"
	>
		<div class="w-full flex justify-end">
			<button
				on:click={() => calendarModalStore.toggle()}
				class="block hover:bg-slate-100 duration-100 ease-in-out cursor-pointer rounded w-fit p-1"
			>
				<span class="text-slate-500">
					<Icon height="25px" icon="tabler:x" />
				</span>
			</button>
		</div>

		<div>
			<p>Add event to day</p>
			<input class="outline outline-1 outline-slate-300 rounded px-2 p-1 text-sm" type="text" />
		</div>
		<div>
			<p>Pick Workout</p>
			<input class="outline outline-1 outline-slate-300 rounded px-2 p-1 text-sm" type="text" />
			<div>
				<button>Create Workout</button>
			</div>
		</div>
	</div>
{/if}
