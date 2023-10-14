<script lang="ts">
	import { fly } from 'svelte/transition';
	export let closeMenu: () => void;
</script>

<div id="menu" class="relative w-full shadow md:hidden">
	<ul
		in:fly={{ y: -422, duration: 400, opacity: 0.35 }}
		out:fly={{ y: -422, duration: 400, opacity: 0.35 }}
		class="absolute p-3 bg-white flex flex-col w-full border-b border-slate-200 z-10"
	>
		<a href="/" class="pb-2" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Home</li>
		</a>
		<hr class="border-1 border-slate-200" />

		<a href="/" class="py-2" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Profile</li>
		</a>
		<hr class="border-1 border-slate-200" />
		<a href="/mealplans" class="py-2" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Meal Plans</li>
		</a>
		<hr class="border-1 border-slate-200" />
		<a href="/workouts" class="py-2" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Workouts</li>
		</a>
		<hr class="border-1 border-slate-200" />
		<a href="/" class="py-2" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Settings</li>
		</a>
		<hr class="border-1 border-slate-200" />
		<a class="pt-2" href="/" on:click={closeMenu}>
			<li class="py-3 pl-4 rounded text-lg font-medium hover:bg-slate-100">Analytics</li>
		</a>
	</ul>
</div>
