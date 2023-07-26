import { twMerge } from "tailwind-merge";

export default function cn(...classes) {
	// return classes.filter((value) => value ?? "").join(" ");
	return twMerge(classes);
}
