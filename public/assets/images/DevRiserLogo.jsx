import Image from "next/image";
import DARKLOGO from "../icons/Dark logo.svg";
import LIGHTLOGO from "../icons/Light logo.svg";
function DevRiserLogo(props) {
	return (
		<>
			<Image src={DARKLOGO} data-hide-in-dark='true' {...props} alt='' />
			<Image src={LIGHTLOGO} data-hide-in-light='true' {...props} alt='' />
		</>
	);
}

export default DevRiserLogo;

// <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
// 	<path d='M32.35 16.5C32.35 25.613 25.03 33 16 33 6.97 33 0 25.613 0 16.5S6.97 0 16 0c9.03 0 16.35 7.387 16.35 16.5z' fill={props.bgColor} />
// 	<path d='M11.326 21.52l-5.084-5.612 5.08-5.71 1.06.984-4.195 4.717 4.191 4.627-1.052.994z' fill={props.strokeColor} />
// 	<path
// 		d='M14.73 31.514l-.82-.122a14.506 14.506 0 01-8.936-5.005c-2.308-2.729-3.58-6.241-3.58-9.887 0-8.307 6.62-15.065 14.758-15.065v1.464C8.805 2.899 2.829 9 2.829 16.499c0 6.53 4.354 11.992 10.468 13.297V16.152h1.434l-.001 15.362zM16.15 31.566v-1.464c7.347 0 13.323-6.101 13.323-13.602-.001-6.372-4.444-11.937-10.467-13.287v13.636h-1.435V1.48l.825.129a14.684 14.684 0 018.954 5.083 15.256 15.256 0 013.556 9.808c0 8.308-6.62 15.066-14.756 15.066z'
// 		fill={props.strokeColor}
// 	/>
// 	<path d='M20.977 22.804l-1.061-.984 4.196-4.717-4.192-4.627 1.053-.994 5.084 5.611-5.08 5.711z' fill={props.strokeColor} />
// </svg>;
