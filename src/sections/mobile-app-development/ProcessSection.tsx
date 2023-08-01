import SectionHeading from "@/components/SectionHeading";
import { PROCESS_DETAILS } from "@/utils/web-development-data";
import Placeholder from "../../../public/assets/images/placeholder.png";
import React from "react";
import Image from "next/image";
PROCESS_DETAILS;
const ProcessSection = () => {
	return (
		<SectionHeading title='Our Process' gap='50px'>
			<div className='flex gap-8'>
				<div className='grid-cols-3'>
					{PROCESS_DETAILS.slice(0, 9).map(({ heading }) => (
						<div key={heading}>
							<Image src={Placeholder} alt='' />
							<span>{heading}</span>
						</div>
					))}
				</div>
				<div></div>
			</div>
		</SectionHeading>
	);
};

export default ProcessSection;
