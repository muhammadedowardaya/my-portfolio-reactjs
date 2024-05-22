'use client';

import { useState } from 'react';

export default function BurgerMenu({
	onMenuClick,
	className,
}: {
	onMenuClick: () => void;
	className?: string;
}) {
	const [active, setActive] = useState(false);

	const onMenuClickHandler = () => {
		setActive(!active);
		onMenuClick();
	};
	return (
		<div
			className={`${className} w-10 h-10 p-2 flex flex-col justify-center gap-y-2`}
			onClick={onMenuClickHandler}
		>
			<div
				className={`
                transition w-full h-1 bg-white 
                ${active ? 'rotate-45 translate-y-2 -translate-x-2 w-10' : ''}`}
			></div>
			<div
				className={`
                transition w-full h-1 bg-white
                ${active ? 'hidden' : ''}`}
			></div>
			<div
				className={`
                transition w-full h-1 bg-white
                ${
									active ? '-rotate-45 -translate-y-1 -translate-x-2 w-10' : ''
								}`}
			></div>
		</div>
	);
}
