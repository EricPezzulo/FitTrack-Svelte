<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../../components/Elements/Button.svelte';
	import ListOfWorkouts from '../../components/Workouts/ListOfWorkouts.svelte';

	import { itemsStore } from '../../stores';
	export let data;

	onMount(() => {
		$itemsStore = data.data;
	});
</script>

<div class="flex flex-col bg-[#f2f5f8] pt-7 h-full">
	<div class="px-5 md:max-w-2xl">
		<div class="py-1 w-fit">
			<a href="/workouts/createworkout">
				<Button bgColor="bg-white">Create a workout</Button>
			</a>
		</div>
		<div class="py-1 w-fit">
			<Button bgColor="bg-white">Browse Workouts</Button>
		</div>
	</div>
	<ListOfWorkouts />
</div>
