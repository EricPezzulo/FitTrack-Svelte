export type ExercisesType = Exercise[];
export type Exercise = {
	exerciseName: string;
	instructions: string;
	id: string;
};
export type WorkoutType = {
	workoutName: string;
	exercises: ExercisesType;
};
export {};
