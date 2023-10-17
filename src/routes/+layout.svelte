<script lang="ts">
	import Header from '../components/Header/Header.svelte';
	import Menu from '../components/Menu/Menu.svelte';
	import '../app.css';
	import MobileMenu from '../components/Menu/MobileMenu.svelte';

	let showMobileMenu: boolean = false;
	function closeMenu(): void {
		showMobileMenu = false;
	}
</script>

<div class="flex min-h-screen bg-slate-100">
	<Menu />

	<div class="flex flex-col w-full">
		<Header bind:showMobileMenu />
		{#if showMobileMenu && window.innerWidth < 640}
			<MobileMenu {closeMenu} />
		{/if}

		<slot />
	</div>
</div>
