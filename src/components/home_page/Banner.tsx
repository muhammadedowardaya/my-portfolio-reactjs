import Image from 'next/image';

export default function Banner() {
	return (
		<div
			className="
                relative h-max pb-4 bg-[length:250px] bg-none
                bg-no-repeat md:bg-[url('/img/my-photo.png')] bg-[position:right_130px]
                sm:!bg-[position:98%_30px] md:bg-[position:98%_70px]
                lg:bg-[length:350px] lg:h-[600px]
            "
		>
			<div className="absolute inset-0 bg-black opacity-60 lg:hidden"></div>
			<div className="pt-6 sm:pb-14 lg:pt-14 flex flex-nowrap">
				<section className="px-8 sm:px-12 py-4 sm:flex sm:gap-x-4 lg:block">
					<div
						className="
                        w-32 h-32 relative border-x-2 border-t-2 border-b-8 border-white
                        bg-[url('/img/my-photo.png')] bg-[position:center_20px] bg-no-repeat
                        bg-cover bg-[#00242d] mb-4 sm:hidden
                    "
					></div>
					<div>
						<h1 className="relative z-20 font-extrabold text-2xl sm:!text-4xl md:!text-7xl lg:!text-8xl mb-4 font-bebas_neue">
							MUHAMMAD EDO WARDAYA <br />
							REACTJS DEVELOPER
						</h1>
						<p className="relative z-20 text-sm lg:!text-xl">
							Muhammad Edo Wardaya is a ReactJS Developer <br />
							from Indonesia, specifically from Bogor, West Java. <br />
							He is an introvert who consistently approaches his work <br />
							with diligence and passion.
						</p>
					</div>
					<div
						className="
                        w-48 h-48 relative border-x-2 border-t-2 border-b-8 border-white
                        bg-[url('/img/my-photo.png')] bg-[position:center_20px] bg-no-repeat
                        bg-cover bg-[#003a42] mb-4 hidden sm:block md:hidden
                    "
					></div>
				</section>
			</div>
			<div
				className="
                    w-full h-screen absolute -bottom-[40px] right-0 left-0 bg-[url('/background-image/wave1.png')]
                    bg-contain bg-no-repeat bg-bottom
                    sm:!-bottom-20
                "
			></div>
		</div>
	);
}
