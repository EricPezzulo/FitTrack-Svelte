<script lang="ts">
	import Button from '../Elements/Button.svelte';
	import { clickOutside } from '../../utils/clickOutside';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { scale } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	export let showMobileMenu: boolean;
	let userMenuActive = false;

	const toggleUserMenu = () => {
		userMenuActive = !userMenuActive;
	};

	const openMobileMenu = () => {
		showMobileMenu = !showMobileMenu;
	};
</script>

<header class="z-20 bg-white border-b border-slate-200 flex flex-row h-14">
	<div class="p-2 sm:px-5 flex items-center justify-between w-full">
		<div class="flex items-center">
			<button on:click={openMobileMenu} class="pr-2 md:hidden">
				<Icon icon="tabler:menu-2" height="24px" />
			</button>

			<a href="/">
				<h1 class="text-xl font-semibold whitespace-nowrap">Fit Track</h1>
			</a>
		</div>
		{#if $page.data.session}
			<div class="flex">
				{#if $page.data.session?.user?.image}
					<button class="flex items-center" on:click={toggleUserMenu}>
						<div class="sm:pr-2">
							<img
								class="rounded-full h-8 w-8"
								src={$page.data.session?.user?.image}
								alt={$page.data.session?.user?.name}
							/>
						</div>

						<span class="font-semibold hidden sm:block"
							>{$page.data.session?.user?.name}
						</span><Icon
							class="hidden sm:block"
							icon="tabler:chevron-down"
							height="20px"
							width="20px"
						/>
					</button>
				{/if}
			</div>
		{:else}
			<Button func={() => signIn()}>Sign In</Button>
		{/if}
	</div>

	{#if userMenuActive}
		<div
			in:scale={{ duration: 250, start: 0.5, easing: quintIn }}
			out:scale={{ duration: 350, start: 0.5, easing: quintOut }}
			use:clickOutside
			on:click_outside={() => (userMenuActive = false)}
			id="userMenu"
			class="absolute top-16 right-2 w-36 border-slate-200 border rounded bg-white shadow-sm"
		>
			<ul>
				<li
					class="py-1 pl-3 cursor-pointer rounded-t hover:bg-blue-500 hover:text-white duration-75 ease-in-out"
				>
					Profile
				</li>
				<li
					class="py-1 pl-3 cursor-pointer hover:bg-blue-500 hover:text-white duration-75 ease-in-out"
				>
					Dashboard
				</li>

				<li
					class="py-1 pl-3 cursor-pointer rounded-b hover:bg-blue-500 hover:text-white duration-75 ease-in-out"
				>
					<button on:click={() => signOut()}>Sign out</button>
				</li>
			</ul>
		</div>
	{/if}
</header>
