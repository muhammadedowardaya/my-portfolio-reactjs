import Image from 'next/image';

export default function Footer() {
	return (
		<footer
			className="
                bg-[#013d45] text-white pt-36 pb-6 px-12 bg-[url('/background-image/wave5.png')] bg-no-repeat
                bg-contain w-screen h-max bg-[position:center_-50px] lg:bg-[position:center_-150px]
            "
		>
			<div className="flex justify-between">
				<div>
					<h3 className="font-bebas_neue text-3xl leading-7 mb-4">
						Muhammad <br />
						Edo Wardaya
					</h3>
					<p className="text-sm">
						His name is Muhammad Edo Wardaya, <br />a talented ReactJS web
						developer <br />
						known for his consistent diligence <br />
						and passion in his work.
					</p>
				</div>
			</div>
			<hr className="text-[#1a5158] mt-8 mb-4" />
			<div className="bg-[#1a5158] py-2 px-4 flex gap-y-2 flex-col-reverse md:flex-row justify-between">
				<p className={`font-barlow_condensed`}>
					2023 MUHAMMAD EDO WARDAYA, ALL RIGHT RESERVED
				</p>
				<div className="flex gap-x-2">
					<a href="#">
						<Image
							src="/social-media/instagram.svg"
							alt="instagram icon"
							width={30}
							height={30}
						/>
					</a>
					<a href="#">
						<Image
							src="/social-media/facebook.svg"
							alt="facebook icon"
							width={30}
							height={30}
						/>
					</a>
					<a href="#">
						<Image
							src="/social-media/tiktok.svg"
							alt="tiktok icon"
							width={30}
							height={30}
							className="bg-white"
						/>
					</a>
					<a href="#">
						<Image
							src="/social-media/youtube.svg"
							alt="youtube icon"
							width={30}
							height={30}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
