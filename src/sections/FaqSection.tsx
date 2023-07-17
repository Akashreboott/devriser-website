import FAQ from "@/components/FAQ";
import React from "react";

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
		<section className='grid justify-center gap-12 max-md:px-4 mb-48'>
			<h2 className='primary-heading mt-24 text-center'>
				Frequently <span className='clip pink-gradient-bright '>Asked</span> Questions
			</h2>

			<div className='flex w-full max-w-screen-md flex-col gap-4'>
				{FAQS.map((faq) => (
					<FAQ {...faq} key={faq.title} />
				))}
			</div>
		</section>
	);
};

export default FaqSection;
