export type ExerciseType = {
	exerciseName: string;
	instructions: string;
	_id: string;
};
export type ExerciseListType = {
	exercises: ExerciseType[];
};
export type Workout = {
	workoutName: string;
	exercises: ExerciseType[];
	_id: string;
};
