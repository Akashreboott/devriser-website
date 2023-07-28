import FAQ from "@/components/FAQ";
import SectionHeading from "@/components/SectionHeading";

const FaqSection = () => {
	const FAQS = [
		{
			title: "What CMS platforms do you offer for website creation?",
			content:
				"We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
		},
		{
			title: "What will be the cost of the CMS development services?",
			content:
				"We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
		},
		{
			title: "How much time will it take to create a website?",
			content:
				"We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
		},
		{
			title: "Is my data secure with you?",
			content:
				"We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
		},
	];
	return (
		<SectionHeading title='Frequently Asked Questions' gradientText='Asked' className='mt-24 grid justify-center gap-12  max-md:px-4'>
			<div className='flex w-full max-w-screen-md flex-col gap-4'>
				{FAQS.map((faq) => (
					<FAQ {...faq} key={faq.title} />
				))}
			</div>
		</SectionHeading>
	);
};

export default FaqSection;
