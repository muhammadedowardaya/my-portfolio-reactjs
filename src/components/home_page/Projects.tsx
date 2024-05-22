'use client';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import ProjectImages from '@/components/home_page/ProjectImages';
import { getProjectById } from '@/features/projects/projectsSlice';

// Swiper
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '@/styles/swiper-flip-effect.css';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
	const [activeIndex, setActiveIndex] = useState(0);
	// The `state` arg is correctly typed as `RootState` already
	const projects = useAppSelector((state) => state.projects.projects);
	const project = useAppSelector((state) => state.projects.project);
	const dispatch = useAppDispatch();

	const onImageClickHandler = (id: string) => {
		dispatch(getProjectById(id));
	};

	const slideChangeHandler = (swiper: any) => {
		setActiveIndex(swiper.activeIndex);
	};

	return (
		<div className="color-[#003c45] relative h-max lg:h-[750px] flex overflow-y-hidden">
			<div
				className="
                    absolute -top-10 left-0 right-0 w-screen h-screen z-10 bg-top
                    bg-[url('/background-image/wave2.png')] bg-contain bg-no-repeat
                    sm:-top-24 lg:-top-40
                "
			></div>
			<div
				className="
                    absolute bottom-0 left-0 right-0 w-screen h-screen z-10 bg-bottom
                    bg-[url('/background-image/wave3.png')] bg-contain bg-no-repeat
                    sm:-bottom-20 lg:-bottom-40
                "
			></div>
			<div
				className="bg-[#dbf6e5] px-12 pt-32 w-[70%] h-full absolute hidden lg:block"
				style={{
					clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
				}}
			></div>
			<div className="px-8 sm:px-12 pb-24 pt-14 sm:pt-20 lg:pt-32 w-full lg:w-[70%] relative z-20">
				<h2 className="text-2xl sm:!text-center md:text-left lg:text-6xl font-bebas_neue mb-6 capitalize">
					Here are some websites I have created using ReactJS
				</h2>
				<Swiper
					effect={'flip'}
					grabCursor={true}
					pagination={true}
					navigation={true}
					modules={[EffectFlip, Pagination, Navigation]}
					onSlideChange={slideChangeHandler}
					className="w-full max-w-60 h-60 lg:!hidden"
				>
					{projects.length > 0 &&
						projects.map((project) => {
							return (
								<SwiperSlide>
									<Image
										src={project.src}
										className="object-cover"
										alt="project image"
										fill
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
				{/* for desktop */}
				<h3 className="text-4xl mt-10 font-bebas_neue mb-3 hidden lg:block">
					{project?.title}
				</h3>
				<p className="text-xl hidden lg:block">{project?.description}</p>
				{/* for mobile */}
				<h3 className="text-xl mt-4 font-bebas_neue mb-3 lg:hidden">
					{projects[activeIndex].title}
				</h3>
				<p className="text-sm lg:hidden">{projects[activeIndex].description}</p>
			</div>
			<div
				className={`w-[50%] h-full hidden lg:block bg-cover`}
				style={{
					backgroundImage: `url(${project?.src})`,
				}}
			></div>

			<ProjectImages
				data={projects}
				onImageClick={onImageClickHandler}
				className="hidden lg:block pb-8 z-20"
			/>
		</div>
	);
}
