import placeholder from "../../public/assets/images/placeholder.png";

export interface NAV_LINKSInterface {
	services: [string, string][];
	solutions: [string, string][];
	blog: [string, string][];
	contact: [string, string][];
	AboutUs: [string, string][];
	languages: [string][];
}

export const NAV_LINKS: NAV_LINKSInterface = {
	services: [
		["Web Development", "#"],
		["Mobile Development", "#"],
		["UI/UX Services", "/ui-ux-design-services"],
		["CMS Services", "/"],
		["Managed Services", "#"],
		["Enterprise Solutions", "#"],
	],
	solutions: [
		["ERP", "#"],
		["CRM", "#"],
		["HRMS", "#"],
		["IMS", "#"],
	],
	blog: [
		["Blog 0", "#"],
		["Blog 1", "#"],
		["Blog 2", "#"],
		["Blog 3", "#"],
		["Blog 4", "#"],
		["Blog 5", "#"],
	],
	contact: [
		["Contact Link 0", "#"],
		["Contact Link 1", "#"],
		["Contact Link 2", "#"],
		["Contact Link 3", "#"],
		["Contact Link 4", "#"],
		["Contact Link 5", "#"],
	],
	AboutUs: [
		["About Link 0", "#"],
		["About Link 1", "#"],
		["About Link 2", "#"],
		["About Link 3", "#"],
		["About Link 4", "#"],
		["About Link 5", "#"],
	],
	languages: [["En"], ["Francis"], ["Posh"]],
};

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
