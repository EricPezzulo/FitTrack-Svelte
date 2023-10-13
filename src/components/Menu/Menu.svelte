<script>
	import MenuItem from './MenuItem.svelte';
</script>

<div class="hidden bg-[#1a1f3b] md:flex flex-col items-center pt-10 overflow-y-auto w-18">
	<MenuItem title="Home" url="/" icon="carbon:home" />
	<MenuItem title="Profile" icon="tabler:user" />
	<hr class="bg-[#2e8de6] w-3/4 h-0.5 rounded-full border-none" />
	<MenuItem title="Meal Plan" url="/" icon="ep:food" />
	<MenuItem title="Workouts" url="/workouts" icon="material-symbols:exercise-outline" />
	<hr class="bg-[#2e8de6] w-3/4 h-0.5 rounded-full border-none" />
	<MenuItem title="Settings" icon="tabler:settings" />
	<MenuItem title="Analytics" icon="ion:analytics-outline" />
</div>
