<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string,
		title: string,
		url: string = '/';
</script>

<div class="p-2 flex flex-col items-center">
	<a class="flex flex-col items-center" href={url} rel={title}>
		<div
			class="bg-[#28305e] w-12 h-12 flex items-center justify-center rounded duration-100 ease-in cursor-pointer hover:bg-[#56a3eb]"
		>
			<Icon color="white" {icon} height="30px" />
		</div>
		<p class="text-white text-center pt-2 text-sm">{title}</p>
	</a>
</div>
