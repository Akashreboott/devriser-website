import { useTranslation } from "@/app/i18n";
import { TYPES_OF_WEBSITES } from "@/utils/cms-data";
import cn from "@/utils/cn";
import React from "react";

const WebsiteTypesSection = async (props: any) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = await useTranslation(props.lng, "cmsServices");
	let WEBSITES: string[] = t("websites", { returnObjects: true });

	return (
		<section className='section-spacing-p  relative mx-3  grid items-center  lg:grid-cols-2'>
			<div className='absolute -right-[5%] -top-[18%] aspect-square w-[246px] rounded-full bg-coral/40 blur-[200px]'></div>

			<h2 className='primary-heading mx-auto max-lg:max-w-[95%] max-lg:text-center lg:max-w-[70%]'>{t("websites-heading.heading")}</h2>
			<div className='grid gap-6 max-lg:mt-[50px] [&>*]:flex [&>*]:justify-center [&>*]:gap-3.5'>
				<div>
					{WEBSITES.slice(0, 3).map((website) => (
						<div
							key={website}
							className={cn(
								"btn-outline px-1 text-center !text-p16 [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
							)}>
							{website}
						</div>
					))}
				</div>
				<div className='gap-8'>
					{WEBSITES.slice(3, 5).map((website) => (
						<div
							key={website}
							className={cn(
								"btn-outline px-1 text-center !text-p16 [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
							)}>
							{website}
						</div>
					))}
				</div>
				<div>
					{WEBSITES.slice(5).map((website) => (
						<div
							key={website}
							className={cn(
								"btn-outline px-1 text-center !text-p16 [--gradient-border-color:var(--light-gradient-border2)] max-md:rounded-sm md:px-4 "
							)}>
							{website}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WebsiteTypesSection;
