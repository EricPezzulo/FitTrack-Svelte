<script lang="ts">
	export let workoutName: string;
</script>

<div class="input-container">
	<label for="input">Workout name:</label>
	<input type="text" id="input" bind:value={workoutName} />
</div>

<style>
	.input-container {
		display: flex;
		background: #ffffff;
		padding: 25px;
		border-radius: 4px;
		box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px; /* SWAP OUT FOR PADDING */
	}
	label {
		font-size: 20px;
	}
	input {
		border-radius: 5px;
		border: none;
		background-color: rgb(245, 245, 245);
		height: 25px;
		padding-inline: 5px;
	}
	input:focus,
	input:active {
		outline: none;
	}

	@media screen and (max-width: 600px) {
		.input-container {
			width: 90%;
		}
	}
	@media screen and (min-width: 600px) {
		.input-container {
			width: 75%;
		}
	}
	@media screen and (min-width: 1024px) {
		.input-container {
			width: 700px;
		}
	}
</style>
