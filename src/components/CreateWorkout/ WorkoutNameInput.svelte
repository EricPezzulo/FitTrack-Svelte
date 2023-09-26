<script lang="ts">
	export let workoutName: string;
</script>

<div class="input-container">
	<label for="input">Workout name:</label>
	<input type="text" id="input" bind:value={workoutName} />
</div>

<!-- // #027BCE // #0496FF // #3E6680 // #4BB3FD // #00487C -->

<style>
	.input-container {
		/* background-color: rgb(202, 217, 230); */
		padding-top: 20px;
		padding-bottom: 35px;
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
</style>
