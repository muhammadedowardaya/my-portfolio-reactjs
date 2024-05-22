import projectsData from '@/utils/projectsData';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Project = {
	id: string;
	title: string;
	description: string;
	src: string;
};

interface ProjectsState {
	projects: Project[];
	project: Project;
}

const initialState: ProjectsState = {
	projects: projectsData,
	project: projectsData[0],
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		getProjectById: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const project = state.projects.find((project) => project.id === id);
			if (project) {
				state.project = project;
			}
		},
	},
});

export const { getProjectById } = projectsSlice.actions;
export default projectsSlice.reducer;
