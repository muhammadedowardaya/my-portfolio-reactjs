'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/app/hooks';
import { GrFormNext, GrFormPrevious, GrPrevious } from 'react-icons/gr';

type Project = {
	id: string;
	title: string;
	src: string;
};

type ProjectImagesProps = {
	data: Project[];
    className?: string;
	onImageClick: (id: string) => void;
};

export default function ProjectImages({
	data,
    className,
	onImageClick,
}: ProjectImagesProps) {
	const projectState = useAppSelector((state) => state.projects.project);
	const [startIndex, setStartIndex] = useState(0);
	const projectsPerPage = 3;
	const endIndex = Math.min(startIndex + projectsPerPage, data.length);
	const visibleProjects = data.slice(startIndex, endIndex);

	const handleNextClick = () => {
		if (endIndex < data.length) {
			setStartIndex(startIndex + projectsPerPage);
		}
	};

	const handlePrevClick = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - projectsPerPage);
		}
	};

	return (
		<div className={`${className} absolute bottom-20 left-[50%] translate-x-[-50%] z-20`}>
			<div className="relative flex flex-wrap gap-x-8 gap-y-8">
				{visibleProjects.map((project, index) => (
					<div
						key={index}
						onClick={() => onImageClick(project.id)}
						className={`cursor-pointer w-32 h-32 bg-white rounded-lg relative overflow-hidden border-4 transition-transform duration-300 ${
							project.id === projectState.id
								? ' border-yellow-400 scale-110'
								: 'hover:border-sky-300'
						}`}
					>
						<Image
							src={project.src}
							fill
							alt="project image"
							sizes="100%"
							className="object-cover"
						/>
					</div>
				))}
				{endIndex < data.length && (
					<button
						onClick={handleNextClick}
						className="cursor-pointer absolute rounded-md overflow-hidden -right-20 top-[50%] translate-y-[-50%] border-2 border-white"
					>
						<GrFormNext className="text-4xl text-white bg-yellow-400 border border-yellow-400 drop-shadow-md shadow-yellow-400" />
					</button>
				)}
				{startIndex > 0 && (
					<button
						onClick={handlePrevClick}
						className="cursor-pointer absolute rounded-md overflow-hidden -left-20 top-[50%] translate-y-[-50%] border-2 border-white"
					>
						<GrFormPrevious className="text-4xl text-white bg-yellow-400 border border-yellow-400 drop-shadow-md shadow-yellow-400" />
					</button>
				)}
			</div>
		</div>
	);
}
