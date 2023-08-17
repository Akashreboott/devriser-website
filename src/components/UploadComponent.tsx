"use client";
import { useState } from "react";

const UploadComponent = (props: { onInput: () => void }) => {
	const [file, setFile] = useState<any>();

	return (
		<div className='relative isolate mt-4 h-[40px] w-full overflow-hidden'>
			<div className=' absolute -z-10 flex h-full w-full items-center overflow-hidden rounded-md border border-dark/20 dark:border-white/20 md:w-1/2 '>
				<button className='h-full shrink-0 appearance-none bg-dark  px-6 py-2 font-medium text-white dark:bg-white dark:text-black max-md:text-sm'>
					Upload
				</button>
				<div className='flex h-full w-full items-center justify-start px-2 max-md:text-xs'>{file?.name ?? "Click here to upload...."}</div>
			</div>
			<input
				onInput={props.onInput}
				type='file'
				name='attachments'
				id=''
				className='z-50 !h-full  !w-full opacity-0'
				onChange={(e) => {
					setFile(e.target.files?.item(0));
				}}
			/>
		</div>
	);
};
export default UploadComponent;
