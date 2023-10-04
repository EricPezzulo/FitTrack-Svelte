<script>
	import Header from '../components/Header/Header.svelte';
	import Menu from '../components/Menu/Menu.svelte';
	import '../app.css';
</script>

<div class="min-h-screen flex h-full">
	<Menu />
	<div class="flex flex-col flex-1">
		<Header />
		<div class="bg-slate-50 h-full">
			<slot />
		</div>
	</div>
</div>
