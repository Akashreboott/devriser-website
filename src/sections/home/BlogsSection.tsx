import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import LineLayout from "@/components/LineLayout";
import SideHeading from "@/components/SideHeading";
import Link from "next/link";
import React from "react";
import ArrowSmall from "../../../public/assets/icons/ArrowSmall";
import image218 from "../../../public/assets/images/Rectangle-218.png";

const BlogsSection = () => {
	return (
		<>
			<SideHeading
				heading='Blogs'
				description='Discover Our Thoughtful Perspectives'
				gradientText='Thoughtful Perspectives'
				gradientColor='[background-color:#7B9AFE]'
			/>
			<div className='wf mx-auto mt-10 grid w-[90%] grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 '>
				<BlogCard
					heading='Know all about improving your sales through eaiser'
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
					image={image218}
				/>
				<BlogCard
					heading='Know all about improving your sales through eaiser'
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
					image={image218}
				/>
				<BlogCard
					heading='Know all about improving your sales through eaiser'
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
					image={image218}
				/>
			</div>
			<Link href={"#"} aria-label='View all blogs' className='mx-auto mt-10 flex items-center justify-center gap-3 underline'>
				View all
				<ArrowSmall className='h-4 ' />
			</Link>
		</>
	);
};

export default BlogsSection;
