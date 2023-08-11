import Email from "@/assets/icons/Email";
import LocationIcon from "@/assets/icons/LocationIcon";
import Phone from "@/assets/icons/Phone";
import illustration from "./../../public/assets/images/dark hero illustration.svg";
import Lightillustration from "./../../public/assets/images/light hero illustration.svg";
import UkFlag from "./../../public/assets/images/UK-FLAG.png";
export const COMPANY_DETAILS = [
	{
		contact: "Email",
		details: "ibrahimburhan@devriser.in",
		icon: Email,
	},
	{
		contact: "Phone",
		details: "+9867865457675",
		icon: Phone,
	},
	{
		contact: "Location",
		details: "1901 Thornridge Cir. Shiloh, Hawaii ",
		icon: LocationIcon,
	},
];

export const OUR_SERVICES: {
	heading: string;
	description: string;
	DarkVisibleImage: any;
	LightVisibleImage: any;
	link: [string, string];
}[] = [
	{
		heading: "Explore a service",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Explore Services", "/contact-us/services/"],
	},
	{
		heading: "Develop a solution",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Explore Solutions", "/contact-us/solutions/"],
	},
];

export const OFFICE_DETAILS: {
	city: string;
	address: string;
	DarkVisibleImage: any;
}[] = [
	{
		city: "Dubai",
		address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
		DarkVisibleImage: UkFlag,
	},
	{
		city: "China",
		address: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
		DarkVisibleImage: UkFlag,
	},
	{
		city: "France",
		address: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
		DarkVisibleImage: UkFlag,
	},
	{
		city: "New York",
		address: "4140 Parker Rd. Allentown, New Mexico 31134",
		DarkVisibleImage: UkFlag,
	},
];

export const SERVICES_OFFERED: {
	name: string;
	description: string;
	DarkVisibleImage: any;
	LightVisibleImage: any;
	link: [string, string];
}[] = [
	{
		name: "Web Development",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
	{
		name: "Mobile Development",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
	{
		name: "UI/UX",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
	{
		name: "CMS Services",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
	{
		name: "Managed Services",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
	{
		name: "Enterprise Solutions",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "services-survey"],
	},
];
export const SOLUTIONS_OFFERED: {
	name: string;
	description: string;
	DarkVisibleImage: any;
	LightVisibleImage: any;
	link: [string, string];
}[] = [
	{
		name: "CRM",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "#"],
	},
	{
		name: "PMS",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "#"],
	},
	{
		name: "IMS",
		description: "It is a long established fact that a reader will be distracted by the readable content",
		DarkVisibleImage: illustration,
		LightVisibleImage: Lightillustration,
		link: ["Get a Quote", "#"],
	},
];
