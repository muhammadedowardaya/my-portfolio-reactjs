'use client';

import Link from 'next/link';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

export default function Navbar() {
	const [isMenuActive, setIsMenuActive] = useState(false);
	const onBurgerMenuClick = () => {
		setIsMenuActive(!isMenuActive);
	};
	return (
		<div
			className="
                flex items-center justify-between w-full px-8 lg:px-12 py-4 font-barlow_condensed 
                text-xl text-[#c6ced1] relative
        "
		>
			<div id="nav-brand" className="text-white font-bold">
				My Portfolio
			</div>
			<div
				id="nav-links"
				className={`
                    lg:mx-auto lg:block 
                    ${
											isMenuActive
												? 'absolute top-[4rem] left-0 right-0 z-30 text-white bg-[#00242d]'
												: 'hidden'
										}
            `}
			>
				<ul
					className={`
                flex items-center justify-center align-middle lg:gap-8 pb-2 px-4
                ${isMenuActive ? 'flex-col border-b-2 border-white' : ''}
                `}
				>
					<li className="w-full group">
						<Link
							href="/about"
							className="py-1 px-4 block group-hover:text-white "
						>
							ABOUT
						</Link>
					</li>
					<li>
						<div className="w-1 h-1 bg-white rounded-full hidden lg:block"></div>
					</li>
					<li className="w-full group">
						<Link
							href="/projects"
							className="py-1 px-4 block group-hover:text-white"
						>
							PROJECT
						</Link>
					</li>
					<li>
						<div className="w-1 h-1 bg-white rounded-full hidden lg:block"></div>
					</li>
					<li className="w-full group">
						<Link
							href="/contact"
							className="py-1 px-4 block group-hover:text-white"
						>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
			<div className="nav-email hidden lg:block">
				muhammadedowarday4@gmail.com
			</div>
			<BurgerMenu onMenuClick={onBurgerMenuClick} className="lg:hidden" />
		</div>
	);
}
