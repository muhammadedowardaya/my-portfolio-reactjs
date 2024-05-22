import Banner from './Banner';
import Navbar from '../Navbar';

export default function Header() {
	return (
		<div className="bg-[#00242d] text-[#fff] relative w-full">
			<Navbar />
			<Banner />
            
			{/* <div className="absolute bottom-0 left-0 right-0 z-10">
				<svg
					width="100%"
					height="100%"
					id="svg"
					viewBox="0 0 1440 230"
					xmlns="http://www.w3.org/2000/svg"
					className="transition duration-300 ease-in-out delay-150"
				>
					<path
						d="M 0,400 L 0,150 C 144,186.13333333333333 288,222.26666666666668 458,217 C 628,211.73333333333332 824,165.06666666666666 992,147 C 1160,128.93333333333334 1300,139.46666666666667 1440,150 L 1440,400 L 0,400 Z"
						stroke="none"
						strokeWidth="0"
						fill="#003b44"
						fillOpacity="1"
						className="transition-all duration-300 ease-in-out delay-150 path-0"
					></path>
				</svg>
			</div> */}
		</div>
	);
}
