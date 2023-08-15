import placeholder from "../../public/assets/images/placeholder.png";
import EN from "../../public/assets/icons/flag.svg";
import FR from "../../public/assets/icons/frenchflagframed.svg";
import CN from "../../public/assets/icons/BevelledChina.svg";

import ShopifyLight from "./../../public/assets/icons/shopify-svgrepo-light.svg";
import ShopifyDark from "./../../public/assets/icons/shopify-svgrepo-com.svg";

import WebFlowLight from "./../../public/assets/icons/webflow-svgrepo-com-light.svg";
import WebFlowDark from "./../../public/assets/icons/webflow-svgrepo-com.svg";

import WixLight from "./../../public/assets/icons/wix-svgrepo-com-light.svg";
import WixDark from "./../../public/assets/icons/wix-svgrepo-com.svg";

import DrupalLight from "./../../public/assets/icons/drupal-svgrepo-com-light.svg";
import DrupalDark from "./../../public/assets/icons/drupal-svgrepo-com.svg";

import WordpressLight from "./../../public/assets/icons/wordpress-logo-svgrepo-com-light.svg";
import WordpressDark from "./../../public/assets/icons/wordpress-logo-svgrepo-com.svg";

// ******************************************      NAV_LINKS       ***********************************************
export interface NAV_LINKSInterface {
	services: [string, string][];
	solutions: [string, string][];
	// blog: [string, string][];
	contact: [string, string][];
	// AboutUs: [string, string][];
	// languages: [string, string][];
}
export interface LANGUAGE {
	shortName: string;
	fullName: string;
	flag: any;
}

export const LANGUAGES: LANGUAGE[] = [
	{ shortName: "EN", fullName: "English", flag: EN },
	{ shortName: "FR", fullName: "Francis", flag: FR },
	// { shortName: "CN", fullName: "China", flag: CN },
];

export const NAV_LINKS: NAV_LINKSInterface = {
	services: [
		["Web Development", "/web-development-services"],
		["Mobile Development", "/mobile-app-development"],
		["UI/UX Services", "/ui-ux-design-services"],
		["CMS Services", "/cms-services"],
		["Managed Services", "/managed-services"],
		["Enterprise Solutions", "/enterprise-solutions"],
	],
	solutions: [
		["Enterpirse Resource Management", "#"],
		["Customer Relationship Management", "#"],
		["Human Resource Management System", "#"],
		["Inventory Management System", "#"],
	],
	contact: [
		["Contact Link 1", "/contact-us"],
		["Contact Link 2", "/contact-us"],
		["Contact Link 3", "/contact-us"],
	],
};

export const ARR_OF_LINKS = Object.entries(NAV_LINKS)
	.map((link) => link)
	.map(([categoryName, Links]) => Links)
	.map((arr) => new Set(arr.map(([name]: [string]) => name)));

// ******************************************      FEATURES       ***********************************************

export const Features: { title: string; description: string; image: any }[] = [
	{
		title: "Time-Efficient",
		description:
			"We harness the power of industry-leading CMS platforms and create stunning websites to capture your visitor's interest in significantly less time.",
		image: placeholder,
	},
	{
		title: "Cost-Effective",
		description:
			"Our approach at DevRiser is to deliver high-value websites that align with your budget, creating a strong online presence that delivers value for your investment.",
		image: placeholder,
	},
	{
		title: "Responsive Design",
		description:
			"We optimize layouts and functionality for effortless compatibility of your website across various screens, from big screens to mobile devices.",
		image: placeholder,
	},
	{
		title: "Easy to Manage",
		description:
			"Effortlessly manage your website with our user-friendly interface. Our expertly crafted sites offer flawless control for easy updates and maintenance.",
		image: placeholder,
	},
];

// ******************************************      EXPERTISE       ***********************************************

export const SPECIALITIES: {
	title: string;
	description: string;
	image: any;
}[] = [
	{
		title: "Real-time project tracking",
		description:
			"Track your website effortlessly with our real-time dashboard, providing project visibility and centralized monitoring for transparent communication.",
		image: placeholder,
	},
	{
		title: "Expertise in CMS Development",
		description:
			"DevRiser's skilled professionals excel in CMS website development services, delivering tailored, top-notch websites to meet your unique requirements.",
		image: placeholder,
	},
	{
		title: "Professional Design & User Experience",
		description:
			"We prioritize visually appealing, user-friendly websites for online success. Our professionals create engaging designs with seamless navigation.",
		image: placeholder,
	},
	{
		title: "Ongoing Support & Maintenance",
		description: "Beyond initial website creation, our team ensures ongoing support, including updates, troubleshooting, and technical assistance.",
		image: placeholder,
	},
	{
		title: "Economically viable",
		description:
			"Get cost-effective CMS development tailored to your budget. Our team delivers efficient, high-quality websites, ensuring exceptional value.",
		image: placeholder,
	},
];

// ******************************************      PROCESS CHART       ***********************************************

export const PROCESSES: { title: string; description: string }[] = [
	{
		title: "Gathering requirements",
		description:
			"We Begin by understanding your needs, goals, preferred CMS platform, and target audience to determine the website's features, functionality, and content requirements",
	},
	{
		title: "Research and planning",
		description:
			"We then move on to conduct in-depth research and create a comprehensive plan outlining the project scope, suitable CMS platform, timeline, and deliverables",
	},
	{
		title: "Creating design",
		description:
			"Our third step involves creating a visually appealing and user-friendly website design, considering factors like branding, layout, navigation, and responsive design",
	},
	{
		title: "Website developments",
		description:
			"Utilizing the approved design, our professionals develop a fully functional website by incorporating all of the necessary features and functionalities",
	},
	{
		title: "Website testing",
		description:
			"We conduct rigorous testing of the newly created website to ensure the website functions flawlessly across different browsers, devices, and scenarios",
	},
	{
		title: "User training",
		description:
			"We provide training and a detailed manual for your web operations team to efficiently manage the website, serving as a comprehensive reference guide for ongoing maintenance and updates",
	},
	{
		title: "Staging site",
		description:
			"After user training and before the launch, we deploy the website for the final round of testing. This ensures that any issues or bugs are identified and resolved before the website goes live",
	},
	{
		title: "Launch of website",
		description: "After successful staging, the website is launched, marking its online debut and making it accessible to the target audience",
	},
];

export const faqQuestions: { question: string; answer: string }[] = [
	{
		question: "What CMS platforms do you offer for website creation?",
		answer:
			"We offer website creation services through popular CMS platforms like WordPress, Drupal, Webflow, Wix, and Shopify. These platforms provide flexible and scalable solutions which help us to create different types of websites, from simple blogs to complex e-commerce stores.",
	},
	{
		question: "What will be the cost of the CMS development services?",
		answer:
			"The cost for CMS website development services can vary depending on several factors, including the complexity of the project, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required. It is essential to discuss your project requirements and goals with us to get an accurate estimate of the cost involved.",
	},
	{
		question: "How much time will it take to create a website?",
		answer:
			"The time required to create a website can vary based on several factors, including the complexity of the website, the specific CMS platform chosen, the desired features and functionalities, and the level of customization required. It is essential to discuss your project requirements and goals with us to get an accurate estimate of the time involved.",
	},
	{
		question: "Is my data secure with you?",
		answer:
			"Yes, we as at DevRiser prioritize the security of your data. We implement robust measures to ensure the confidentiality, integrity, and availability of your information. Rest assured that we follow industry best practices, utilize encryption protocols, and implement secure hosting environments to safeguard your data throughout our design and development process.",
	},
];

interface detail {
	name: string;
	details: string;
	lightImage: any;
	darkImage: any;
}
export const CMS_DETAILS: detail[] = [
	{
		name: "WordPress",
		details:
			"At DevRiser, we leverage WordPress, a versatile and user-friendly CMS platform, using its extensive plugin libraries to customize websites for blogs, business, e-commerce, portfolios, and forums. Our responsive designs enhance user engagement and accessibility across devices.",
		darkImage: WordpressLight,
		lightImage: WordpressDark,
	},
	{
		name: "Drupal",
		details:
			"DevRiser utilizes Drupal, a robust and flexible CMS, to create exceptional websites. With Drupal's customizable architecture, extensive module library, and intuitive administration interface, we ensure optimal performance, scalability, and a great user experience.",
		darkImage: DrupalLight,
		lightImage: DrupalDark,
	},
	{
		name: "Wix",
		details:
			"Wix is a powerful website builder with professional templates, customizable elements, and an app market for added functionalities. We at DevRiser utilize its intuitive tools, reliable hosting, mobile optimization, and SEO capabilities to provide you with a unique website that delivers an outstanding online experience",
		darkImage: WixLight,
		lightImage: WixDark,
	},
	{
		name: "Webflow",
		details:
			"Webflow is known for its intuitive visual editor and robust features. At DevRiser, we leverage its seamless design capabilities, responsive layouts, built-in SEO tools, and extensive template library to create visually stunning websites which align with your goals and objectives",
		lightImage: WebFlowDark,
		darkImage: WebFlowLight,
	},
	{
		name: "Shopify",
		details:
			"Shopify is a powerful e-commerce platform with diverse features to construct and oversee online stores. DevRiser experts harness the extensive capabilities to craft excellent websites tailored to your specific business requirements. We ensure smooth integration, and intuitive navigation, resulting in an elevated shopping experience",
		lightImage: ShopifyDark,
		darkImage: ShopifyLight,
	},
];

export const TYPES_OF_WEBSITES = [
	"Business websites",
	"Blog and news websites",
	"E-commerce websites",
	"Real-estate websites",
	"Community and forum websites",
	"Non-profit and charity websites",
	"Portfolio websites",
	"Educational websites",
];
