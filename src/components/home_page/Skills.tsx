'use client';

import { useAppSelector } from '@/app/hooks';
import SkillCard from './SkillCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Skills() {
	const skills = useAppSelector((state) => state.skills.skills);
	const [activeIndex, setActiveIndex] = useState(0);

	const handleSlideChange = (swiper: any) => {
		setActiveIndex(swiper.activeIndex);
	};

	useEffect(() => {}, []);
	return (
		<div
			className="
                h-max bg-[#DEDDFF] relative px-8 lg:px-12 py-8 sm:pt-4 lg:pt-10
        "
		>
			<h2 className="font-bebas_neue text-2xl lg:text-6xl text-center mb-4 lg:mb-20">
				SKILLS
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 relative z-20">
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className="lg:w-72 lg:h-72 w-40 h-40"
					onSlideChange={handleSlideChange}
				>
					{skills.length > 0 ? (
						skills.map((skill) => {
							return (
								<SwiperSlide
									key={skill.id}
									className="bg-white border-2 border-black rounded-lg overflow-hidden"
								>
									<SkillCard srcImage={skill.srcImage} key={skill.id} />
								</SwiperSlide>
							);
						})
					) : (
						<div>Skill is empty</div>
					)}
				</Swiper>

				{skills.length > 0 && (
					<div>
						<h3 className="font-bold font-bebas_neue text-xl mt-4 lg:text-4xl">
							{skills[activeIndex].title}
						</h3>
						<p className="text-sm lg:text-lg">
							{skills[activeIndex].description}
						</p>
					</div>
				)}
			</div>

			<div
				className="
                    absolute -bottom-[48px] left-0 right-0 w-full h-screen z-10 
                    bg-[url('/background-image/wave4.png')] bg-contain bg-no-repeat bg-bottom
                    sm:!-bottom-[100px] lg:!-bottom-52
                "
			></div>
		</div>
	);
}
