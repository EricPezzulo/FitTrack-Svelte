<script lang="ts">
	import Button from '../Elements/Button.svelte';
	import { clickOutside } from '../../utils/clickOutside';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let userMenuActive = false;

	const toggleUserMenu = () => {
		userMenuActive = !userMenuActive;
	};

	$: console.log(userMenuActive);
</script>

<header class="bg-white flex flex-row h-14 border-b border-gray-200">
	<div class="p-2 sm:px-5 flex items-center justify-between w-full">
		<a href="/">
			<h1 class="text-xl font-semibold whitespace-nowrap">Fit Track</h1>
		</a>
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
