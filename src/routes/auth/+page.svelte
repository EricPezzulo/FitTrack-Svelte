<script>
	import { signIn } from '@auth/sveltekit/client';
	import Button from '../../components/Elements/Button.svelte';
</script>

<div class="p-5">
	<div class="pb-2">
		<Button func={() => signIn()}>Sign In</Button>
	</div>
	<div class="pt-2">
		<Button>Sign Up</Button>
	</div>
</div>
