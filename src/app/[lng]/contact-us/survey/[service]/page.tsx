import Heading from "@/components/SectionHeading";
import QuestionsSection from "@/sections/questions/QuestionsSection";
import { QUESTIONS, Question as QInterface } from "@/utils/questions-data";

const Page = async ({ params, ...props }: { params: { service: string } }) => {
	let questions = QUESTIONS[params.service as keyof typeof QUESTIONS];
	return (
		<Heading
			title=''
			description='Choose one of the options below to get an accurate get started'
			className=' relative mb-40 mt-20 gap-5 overflow-x-hidden dark:[--primary-text-color:rgba(177,178,178,1)] max-lg:w-screen'>
			<QuestionsSection QUESTIONS={questions} redirectTo={["/", "Go to home"]} />
		</Heading>
	);
};

export default Page;
