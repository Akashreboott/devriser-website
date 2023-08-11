export interface Question {
	title: string;
	options: string[];
	field?: "radio" | "checkbox" | "text" | undefined;
}
export interface QUESTIONS {
	"web-development": Question[];
	"cms-services": Question[];
	"mobile-development": Question[];
	"ui-ux": Question[];
	"enterprise-solutions": Question[];
	"managed-services": Question[];
}

export const QUESTIONS: QUESTIONS = {
	"web-development": [
		{
			title: "What is the nature of your business or organization?",
			options: ["E-commerce", "Corporate/Enterprise", "Non-profit/Charity", "Educational"],
		},
		{
			title: "What specific functionalities and features do you require for your custom website?",
			options: [
				"User registration and authentication",
				"Online booking/reservation system",
				"Customized forms and data collection",
				"Integration with third-party APIs",
			],
		},
		{
			title: "Do you have any specific design or branding preferences for your website?",
			options: [
				"Yes, I have my own design for the website.",
				"No, I need assistance with creating the design. ",
				"I already have a brand style guide that needs to be followed.",
			],
		},
		{
			title: "How many pages do you anticipate your custom website will have?",
			options: ["1-5 pages", "6-10 pages/sections", "11-20 pages/sections", "More than 20 pages/sections"],
		},
		{
			title: "Will you require Managed Services to easily update and manage your website content?/ do you want us to manage your website",
			options: ["Yes, I would like Managed Services.", "No, I prefer a static/custom-coded website.", "", ""],
		},
		{
			title: "What is your estimated budget for the custom website development?",
			options: ["Less than $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000 - $50,000", "More than $50,000"],
		},
		{
			title: "Are there any specific technical requirements for your custom website?",
			options: [
				"Integration with existing systems or databases",
				"Multi-language support",
				"Multi-currency ",
				"Online chat system",
				"Chatbot",
				"Regional fencing",
				"Mobile-responsive design",
			],
			field: "checkbox",
		},
		{
			title: "Will your website will have your own mobile app?",
			options: ["Yes we will have our own mobile app", "No, we are not planning for a mobile app", "", ""],
		},
		{
			title: "What is your desired timeline for completing the custom website development?",
			options: ["3-6 months", "6-12 months", "12-18 months", "More than 18 months"],
		},
		{
			title: "Will you require ongoing maintenance and support for your custom website?",
			options: ["Yes, I would like a maintenance and support plan.", "No, I will handle maintenance and support myself."],
		},
		{
			title: "Do you have any additional questions or requirements you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
	"cms-services": [
		{
			title: "Which CMS platform are you considering for building your website?",
			options: ["WordPress", "Wix", "Drupal", "Shopify", "Webflow"],
		},
		{
			title: "What is the primary purpose of your website?",
			options: ["E-commerce", "Blogging", "Business", "Portfolio", "Non-profit/charity"],
		},
		{
			title: "Do you have a UI design in mind for your website?",
			options: ["Yes, I have my own design", "No, I need assistance with the design"],
		},
		{
			title: "How many pages do you anticipate your website will have?",
			options: ["1-5 pages", "6-10 pages", "11-20 pages", "More than 20 pages"],
		},
		{
			title: "Will you need any specific features or functionalities for your website?",
			options: [
				"E-commerce capabilities (online store, payment integration)",
				"Blogging platform",
				"Contact forms and lead generation",
				"Membership or user registration",
			],
			field: "checkbox",
		},
		{
			title: "Do you have existing content (text, images, videos) that needs to be migrated to the new website?",
			options: ["Yes, I have existing content that needs to be migrated.", "No. I don't have the content"],
		},
		{
			title: "What is your estimated budget for building the website?",
			options: ["Less than $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "More than $20,000"],
		},
		{
			title: "What is your desired timeline for completing the website?",
			options: ["1-3 months", "3-6 months", "6-12 months", "More than 1 year"],
		},
		{
			title: "Will you require ongoing maintenance and updates for your website?",
			options: ["Yes, I would like a maintenance plan.", "No, I will handle maintenance myself."],
		},
		{
			title: "Do you have any additional questions or requirements you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
	"mobile-development": [
		{
			title: "What platform(s) do you want your mobile app to be developed for?",
			options: ["iOS", "Android", "Both iOS and Android", ""],
		},
		{
			title: "What is the primary purpose of your mobile app?",
			options: ["E-commerce", "Social networking", "Entertainment", "Productivity"],
		},
		{
			title: "Do you already have a website which you want to integrate with the app?",
			options: [
				"Yes i have and i want to integrate with app",
				"Yes i have but i do not want to integrate",
				"No i don't have one but would like to have",
				"No i don't have a website",
			],
		},
		{
			title: "Do you have a specific design for your mobile app?",
			options: [
				"Yes, I have a specific design concept.",
				"No, I need assistance with designing the app.",
				"I would like a custom design for my app.",
			],
		},
		{
			title: "Will your mobile app require integration with any external services or APIs?",
			options: ["Yes, it will require integration with external services.", "No, it won't require any external integrations.", "", ""],
		},
		{
			title: "What features or functionalities do you want to include in your mobile app?",
			options: ["User authentication and registration", "In-app purchases and payment integration", "Location-based services", "Push notifications"],
			field: "checkbox",
		},
		{
			title: "Will you need assistance with submitting the app to the respective app stores?",
			options: ["Yes, I need help with the app submission process.", "No, I will handle the app submission myself.", "", ""],
		},
		{
			title: "Do you have any existing content (images, illustrations, videos, and text)that should be incorporated into the app?",
			options: ["Yes, I have existing branding elements.", "No, I need assistance with branding and design.", "", ""],
		},
		{
			title: "What is your estimated budget for mobile app development?",
			options: ["Less than $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "$20,000 - $50,000", "More than $50,000"],
		},
		{
			title: "What is your desired timeline for completing the mobile app development?",
			options: ["3-6months", "6-12 months", "12-18 months", "More than 18 months"],
		},
		{
			title: "Will you require ongoing maintenance and updates for your mobile app after it is developed/ deployed/launch?",
			options: ["Yes, I would like a maintenance plan.", "No, I will handle maintenance myself."],
		},
		{
			title: "Do you have any additional questions or specific requirements that you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
	"ui-ux": [
		{
			title: "What type of project do you need UI/UX design services for?",
			options: ["Website", "Mobile application", "Software interface", "Other (Please specify)"],
		},
		{
			title: "Which industry your business belongs to?",
			options: ["E-commerce", "Blogging", "Business", "Portfolio", "Non-profit/charity"],
		},
		{
			title: "Have you already defined your target audience and user personas?",
			options: ["Yes, I have a clear understanding of my target audience.", "No, I need assistance in defining my target audience.", "", ""],
		},
		{
			title: "Do you have any specific design style or visual references for your project?",
			options: ["Minimalistic and clean", "Bold and vibrant", "Elegant and sophisticated", "Playful and creative"],
		},
		{
			title: "What will be the number of pages you're planning to get UI/UX services for?",
			options: ["1-5 pages", "6-10 pages", "11-20 pages", "21-30 pages", "More than 30 pages"],
		},
		{
			title: "How many sections will be there in each page?",
			options: ["2-4", "4-6", "6-8", "8-10"],
		},
		{
			title: "Are there any existing design elements or branding guidelines that need to be incorporated into the design?",
			options: ["Yes, I have existing design elements and branding guidelines.", "No, there are no existing design elements or branding guidelines."],
		},
		{
			title: "Do you have any specific functionality or user experience requirements for your project?",
			options: [
				"Easy navigation and intuitive user interface",
				"Seamless integration with third-party platforms or systems",
				"Interactive elements or animations",
				"Accessibility considerations",
			],
			field: "checkbox",
		},
		{
			title: "What is your estimated budget for the UI/UX design project?",
			options: ["Less than $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "More than $20,000"],
		},
		{
			title: "What is your desired timeline for completing the UI/UX design project?",
			options: ["1-3 months", "3-6 months", "6-12 months", "More than 12 months"],
		},
		{
			title: "Do you have any additional questions or specific requirements that you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
	"enterprise-solutions": [
		{
			title: "What specific enterprise solution are you seeking for your business?",
			options: [
				"Customer Relationship Management (CRM)",
				"IMS",
				"HRMS",
				"Project management",
				"Document management",
				"Contract life-cycle management",
				"Supply Chain Management",
			],
		},
		{
			title: "How many users or employees will be utilizing the solution?",
			options: ["Less than 20 users", "20-40 users", "40-60 users", ""],
		},
		{
			title: "What industry does your business operate in?",
			options: ["Retail", "Manufacturing", "Healthcare", "Financial Services"],
		},
		{
			title: "Are there any specific features or functionalities that you require in the enterprise solution?",
			options: ["AI-powered", "Data analytics ", "", ""],
		},
		{
			title: "Where do you want the solution to be hosted?",
			options: ["On cloud", "On-premises", "", ""],
		},
		{
			title: "Do you have any existing systems or software that the enterprise solution needs to integrate with?",
			options: ["Yes, I need seamless integration with specific systems.", "No, I don't have it.", "", ""],
		},
		{
			title: "What is your estimated budget for implementing the enterprise solution?",
			options: ["Less than $10,000", "$10,000 - $50,000", "$50,000 - $100,000", "$100,000 - $500,000", "More than $500,000"],
		},
		{
			title: "What are your desired outcomes or goals for implementing an enterprise solution?",
			options: [
				"Streamline business processes",
				"Improve data accuracy and accessibility",
				"Enhance decision-making capabilities",
				"Increase operational efficiency",
			],
			field: "checkbox",
		},
		{
			title: "What is your preferred timeline for implementing the enterprise solution?",
			options: ["3-6 months", "6-12 months", "More than 12 months", "Check other websites"],
		},

		{
			title: "Will you require ongoing support or maintenance for the enterprise solution?",
			options: ["Yes, I would like a support plan.", "No, I will handle support internally.", "", ""],
		},
		{
			title: "Do you have any additional questions or specific requirements that you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
	"managed-services": [
		{
			title: "What services are you looking for in managed services? ",
			options: ["We need managed services for our internal IT infrastructure", "We need help to manage our clients'IT infrastructure", "", ""],
		},
		{
			title: "What kind of help do you need? ",
			options: [
				"End-to-end IT infrastructure management ",
				"Management of some components ",
				"A backup team to manage IT infrastructure within the agreed hours or during peak loads ",
			],
		},
		{
			title: "Where do you host your IT infrastructure? ",
			options: ["Completely in the cloud ", "Completely on-premises ", "Both on-premises and in the cloud ", ""],
		},
		{
			title: "Which infrastructure management activities are you considering? ",
			options: [
				"Continuous monitoring of the selected infrastructure components ",
				"Resolution of issues detected during monitoring ",
				"Help desk Proactive support (i.e., preventing issues from happening) ",
				"Administration of the selected infrastructure components ",
				"Cloud monitoring and usage optimization ",
				"Infrastructure security check and/or monitoring ",
				"Design of new infrastructure or infrastructure components ",
				"Cloud migration ",
			],
			field: "checkbox",
		},
		{
			title: "For infrastructure monitoring and management activities, what service time coverage are you considering?",
			options: ["24/7", "24/5", "12/7", "12/5", "8/7", "8/5"],
		},
		{
			title: "For cloud infrastructure services, please indicate what cloud(s) you are using. ",
			options: ["AWS ", "Azure ", "Google Cloud ", "Rackspace", "DigitalOcean "],
		},
		{
			title: "For cloud infrastructure services, please indicate the type of cloud deployment. ",
			options: ["Private ", "Public ", "Hybrid "],
		},
		{
			title: "For help desk services, please select the support level(s) you need",
			options: [
				"L1 (solving basic usage issues, escalating unsolved issues to L2) ",
				"L2 (fixing issues related to app/server configuration) ",
				"L3 (fixing complex issues via changes to the code and database) ",
				"None of them",
			],
			field: "checkbox",
		},
		{
			title: "How many L1 and L2 tickets, if any, do you expect per month? ",
			options: [
				"Up to 50 tickets/per month ",
				"50-150 tickets/month ",
				"150-300 tickets/month ",
				"300-500 tickets/month ",
				"500-1,000 tickets/month ",
				"1,000-2,000 tickets/month ",
				"2,000-5,000 tickets/month ",
				"5,000+ tickets/month ",
				"Not sure ",
			],
		},
		{
			title: "How many L3 requests, if any, do you expect per month? ",
			options: ["FixThis", "", "", ""],
		},
		{
			title: "For security services, please indicate what help you need. ",
			options: [
				"Continuous security monitoring and log analysis ",
				"Penetration testing ",
				"Vulnerability assessment ",
				"Open-source intelligence ",
				"Social engineering ",
				"Red teaming ",
				"Compliance testing ",
				"IT security audit ",
				"Code review ",
				"Not sure ",
			],
			field: "checkbox",
		},
		{
			title: "Do you have any additional questions or specific requirements that you would like to discuss?",
			options: ["", "", "", ""],
			field: "text",
		},
	],
};

// {
// 	title: "Do you have any additional questions or specific requirements that you would like to discuss?",
// 	options: ["", "", "", ""],
// },

// "cms-services":
