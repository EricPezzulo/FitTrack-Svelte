<script lang="ts">
	import { fly } from 'svelte/transition';
	export let closeMenu: () => void;
</script>

<div class="relative w-full md:hidden">
	<ul
		in:fly={{ y: -100, duration: 300, opacity: 0.35 }}
		out:fly={{ y: -150, duration: 400, opacity: 0.35 }}
		class="absolute p-3 bg-white flex flex-col w-full border-b border-slate-200 z-10"
	>
		<a href="/" on:click={closeMenu}>
			<li class="py-2 pl-4 rounded text-lg font-medium">Home</li>
		</a>

		<hr class="border-1 border-slate-200" />
		<a href="/mealplans" on:click={closeMenu}>
			<li class="py-2 pl-4 rounded text-lg font-medium">Meal Plans</li>
		</a>
		<hr class="border-1 border-slate-200" />
		<a href="/workouts" on:click={closeMenu}>
			<li class="py-2 pl-4 rounded text-lg font-medium">Workouts</li>
		</a>
	</ul>
</div>
