<script lang="ts">
	export let px: string = 'px-5',
		py: string = 'py-0.5',
		bgColor: string = 'bg-gray-100',
		hoverColor: string = 'hover:bg-gray-200',
		textColor: string = 'white',
		fontSize: string = '14px',
		fontWeight: string = 'font-normal',
		border: string = 'border border-gray-300',
		borderRadius: string = 'rounded-full',
		shadow: string = 'shadow-none',
		func: () => void = () => {};
</script>

<div>
	<button
		on:click={func}
		class={`flex whitespace-nowrap ${shadow} ${bgColor} ${hoverColor} ${textColor} ${fontSize} ${fontWeight} ${border} ${borderRadius} ${py} ${px} items-center duration-150 ease-in`}
	>
		<slot />
	</button>
</div>
