import projectsData from '@/utils/projectsData';
import { ReactNode, createContext, useContext } from 'react';

type Projects = {
	id: string;
	title: string;
	src: string;
};

type ProjectsContextType = {
	projects: Projects[];
	getProjectById: (id: string) => Projects | undefined;
};

const ProjectsContext = createContext<ProjectsContextType>({
	projects: [],
	getProjectById: () => undefined,
});

export const ProjectsProvider = ({
	children
}: {
	children: ReactNode;
}) => {
	const getProjectById = (id: string) => {
		return projectsData.find((project) => project.id === id);
	};

	return (
		<ProjectsContext.Provider
			value={{
				projects: projectsData,
				getProjectById,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};

export const useProjects = () => useContext(ProjectsContext);
