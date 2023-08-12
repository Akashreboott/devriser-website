import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";

const FaqSection = ({ faqQuestions }: { faqQuestions: { question: string; answer: string }[] }) => {
	return (
		<SectionHeading title='Frequently Asked Questions' gradientText='Asked' className='my-32 grid justify-center gap-12  max-md:px-4'>
			<div className='flex w-full max-w-screen-md flex-col gap-4'>
				{faqQuestions.map((faq) => (
					<FAQ {...faq} key={faq.question} />
				))}
			</div>
		</SectionHeading>
	);
};

export default FaqSection;
