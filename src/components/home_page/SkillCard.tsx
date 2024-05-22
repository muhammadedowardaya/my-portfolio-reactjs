import Image from 'next/image';

export default function SkillCard({
	title,
	srcImage,
	description,
}: {
	title?: string;
	srcImage: string;
	description?: string;
}) {
	return (
		<div className="w-full h-full relative border border-black">
			<Image src={srcImage} fill sizes='100%' alt="Skill Image" />
			{/* <h3 className='bg-[#013d45] text-xl border-2 border-white text-white px-4 py-1 font-bold text-center absolute bottom-4 rounded-full left-[50%] translate-x-[-50%]'>{title}</h3> */}
		</div>
	);
}
