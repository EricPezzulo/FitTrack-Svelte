<script>
	import { fly } from 'svelte/transition';
	import { calendarModalStore } from '../../stores';
	import Icon from '@iconify/svelte';

	$: dayHasEvent = $calendarModalStore.isOpen && $calendarModalStore.hasEvent;
	$: dayHasNoEvent = $calendarModalStore.isOpen && !$calendarModalStore.hasEvent;
</script>

{#if dayHasEvent}
	<div
		in:fly={{ y: 400, duration: 400 }}
		out:fly={{ y: 400, duration: 400 }}
		class="absolute w-96 h-96 bg-white p-5 rounded outline outline-slate-200 shadow"
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
			<p>View Events</p>
			<input class="outline outline-1 outline-slate-300 rounded px-2 p-1 text-sm" type="text" />
		</div>
		<div>
			<p>Edit Workout</p>
			<input class="outline outline-1 outline-slate-300 rounded px-2 p-1 text-sm" type="text" />
			<div>
				<button>EditWorkout</button>
			</div>
		</div>
	</div>
{/if}

{#if dayHasNoEvent}
	<div
		in:fly={{ y: 400, duration: 400 }}
		out:fly={{ y: 400, duration: 400 }}
		class="absolute w-96 h-96 bg-white p-5 rounded-lg outline outline-1 outline-slate-300 shadow"
	>
		<div class="w-full flex justify-between pb-3">
			<p class="font-medium text-xl">Add workout to day</p>
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
			<div>
				<label class="flex flex-col">
					<span class="pb-1">Workout Name:</span>
					<input class="outline outline-1 outline-slate-300 rounded px-2 p-1 text-sm" type="text" />
				</label>
			</div>

			<div />
		</div>
		<div class="pt-5">
			<button class="rounded bg-blue-500 text-white px-2 py-1">Add Workout</button>
		</div>
	</div>
{/if}
