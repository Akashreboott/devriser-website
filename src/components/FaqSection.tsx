import { useTranslation } from "@/app/i18n";
import FAQ from "@/components/FAQ";
import Heading from "@/components/SectionHeading";

const FaqSection = async ({ faqQuestions, ...props }: { faqQuestions: { question: string; answer: string }[]; lng?: string }) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	let { t } = await useTranslation(props.lng, "enterpriseSolutions");

	return (
		<Heading
			title={t("faq-heading.heading")}
			gradientText={t("faq-heading.gradient-text")}
			className='section-spacing-p section-height grid justify-center gap-4  max-md:px-4'>
			<div className='flex w-full max-w-screen-md flex-col gap-4'>
				{faqQuestions.map((faq) => (
					<FAQ {...faq} key={faq.question} />
				))}
			</div>
		</Heading>
	);
};

export default FaqSection;
