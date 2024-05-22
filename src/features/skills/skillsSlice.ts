import skillsData from '@/utils/skillsData';
import { createSlice } from '@reduxjs/toolkit';

type Skill = {
	id: string;
	title: string;
	srcImage: string;
	description: string;
};

interface SkillsState {
	skills: Skill[];
}

const initialState: SkillsState = {
	skills: skillsData,
};

export const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {},
});

export default skillsSlice.reducer;
