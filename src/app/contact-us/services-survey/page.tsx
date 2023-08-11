import SectionHeading from "@/components/SectionHeading";
import Questions from "@/sections/questions/Questions";

const Page = () => {
	return (
		<SectionHeading
			title=''
			description='Choose one of the options below to get an accurate get started'
			className=' relative mb-40 mt-20 gap-5 overflow-x-hidden dark:[--primary-text-color:rgba(177,178,178,1)] max-lg:w-screen'>
			<Questions />
		</SectionHeading>
	);
};

export default Page;
