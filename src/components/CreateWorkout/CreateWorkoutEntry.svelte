<script lang="ts">
	export let exerciseName: string;
	export let instructions: string;
	export let numOfExercises: number;
</script>

<div class="create-exercise-container">
	<div class="exercise-name-input">
		<div class="exercise-name-title-container">
			<div class="exercise-number-box">{numOfExercises}</div>
			<label for="exercise-name-input" style="font-size:20px; padding-left:10px;">
				Exercise name</label
			>
		</div>
		<input class="exercise-input" bind:value={exerciseName} type="text" id="exercise-name-input" />
	</div>
	<div class="instructions-container">
		<label style="font-size:20px; padding-bottom:10px;" for="instructions-input">Instructions</label
		>
		<textarea class="instructions-input" bind:value={instructions} id="instructions-input" />
	</div>
</div>

<style>
	.exercise-name-title-container {
		display: grid;
		align-items: center;
		height: auto;
		align-items: center;
		grid-template-columns: auto 1fr;
		padding-bottom: 10px;
	}
	.exercise-number-box {
		background-color: #0496ff;
		display: grid;
		place-items: center;
		border-radius: 2px;
		color: white;
		font-family: 'Sofia', sans-serif;
		font-weight: 600;
		font-size: 20px;
		width: 25px;
		height: 25px;
	}
	.instructions-input {
		border-radius: 5px;
		background-color: rgb(245, 245, 245);
		/* box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15); */
		padding: 10px;
		border: none;
		resize: none;
		height: 150px;
	}
	.instructions-input:focus,
	.instructions-input:active {
		outline: none;
	}
	.instructions-container {
		display: grid;
	}
	.exercise-input {
		border-radius: 5px;
		background-color: rgb(245, 245, 245);
		/* box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.15); */
		padding-inline: 8px;
		padding-block: 5px;
		border: none;
	}
	.exercise-input:focus,
	.exercise-input:active {
		outline: none;
	}
	.exercise-name-input {
		display: flex;
		flex-direction: column;
		padding-bottom: 15px;
	}
	.create-exercise-container {
		display: flex;
		flex-direction: column;
		background: #ffffff;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);
		margin: 0 auto 0 auto;
	}
	@media screen and (max-width: 600px) {
		.create-exercise-container {
			width: 90%;
		}
	}
	@media screen and (min-width: 600px) {
		.create-exercise-container {
			width: 75%;
		}
	}
	@media screen and (min-width: 1024px) {
		.create-exercise-container {
			width: 700px;
		}
	}
</style>
