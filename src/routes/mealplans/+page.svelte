<script lang="ts">
	import Button from '../../components/Elements/Button.svelte';
	import AddMacros from '../../components/Macros/AddMacros.svelte';
	import TodaysMacros from '../../components/Macros/TodaysMacros.svelte';
</script>

<svelte:head>
	<title>Meal Planning</title>
	<meta name="description" content="Meal Planning" />
</svelte:head>

<div>
	<!-- <div class="grid grid-cols-2 pt-3 place-items-center md:max-w-2xl">
		<Button
			bgColor="bg-blue-600"
			hoverColor="hover:bg-blue-500"
			border="border-2 border-blue-700"
			textColor="text-blue-100"
			fontWeight="font-semibold"
			shadow="shadow">Create Meal Plan</Button
		>
		<Button
			bgColor="bg-blue-600"
			hoverColor="hover:bg-blue-500"
			border="border-2 border-blue-700"
			textColor="text-blue-100"
			fontWeight="font-semibold"
			shadow="shadow">View Meal Plan</Button
		>
	</div> -->
	<TodaysMacros />

	<AddMacros />
</div>
