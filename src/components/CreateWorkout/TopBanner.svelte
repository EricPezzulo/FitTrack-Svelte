<script>
	import Icon from '@iconify/svelte';
	import Button from '../Elements/Button.svelte';
</script>

<div class="container">
	<div class="wrapper">
		<div class="btn-container">
			hi
			<!-- <Button
				bgColor="rgb(239, 242, 255)"
				textColor="rgb(117, 123, 168)"
				border="1px solid rgba(193, 197, 231, 0.7)"
				hoverColor="#e0e2ee"
			>
				<p>Create Workout</p>
				<span class="button-icon-container">
					<Icon icon="mdi:create-outline" height="18px" />
				</span>
			</Button>
			<Button
				bgColor="rgb(239, 242, 255)"
				textColor="rgb(117, 123, 168)"
				border="1px solid rgba(193, 197, 231, 0.7)"
				hoverColor="#e0e2ee"
			>
				<p>Browse Workouts</p>
				<span class="button-icon-container">
					<Icon icon="tabler:search" height="14px" />
				</span>
			</Button> -->
		</div>

		<!-- <div class="right-side-container">
			<span class="icon-container">
				<Icon height="18px" icon="tabler:chevron-down" />
			</span>
		</div> -->
	</div>
</div>

<style>
	/* .button-icon-container {
		padding-left: 10px;
	} */
	/* .icon-container {
		background-color: transparent;
		border-radius: 3px;
		padding: 3px;
		cursor: pointer;
		transition-duration: 250ms;
		animation: ease-in-out;
	}
	.icon-container:hover {
		background-color: rgb(233, 233, 233);
	}
	.right-side-container {
		display: grid;
		grid-template-columns: auto auto;
		place-items: end;
	} */
	.container {
		/* display: flex; */
		padding-bottom: 20px;
	}
	.wrapper {
		/* width: 100%; */
		/* display: grid; */
		/* grid-template-columns: 3fr 1fr; */
		background-color: white;
		border-radius: 4px;
		/* padding: 25px; */
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
	}
	/* .btn-container { */
	/* display: flex; */
	/* display: grid; */
	/* width: fit-content; */
	/* grid-template-columns: auto auto; */
	/* white-space: nowrap;
	}
	/* @media screen and (max-width: 480px) {
		.wrapper {
			padding: 20px;
		}
	} */

	/* @media screen and (max-width: 600px) {
		.container {
			width: 90%;
		}
	}
	@media screen and (min-width: 600px) {
		.container {
			width: 75%;
		}
	}
	@media screen and (min-width: 1024px) {
		.container {
			width: 700px;
		}
	} */
</style>
