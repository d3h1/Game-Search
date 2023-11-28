import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaLinux,
	FaApple,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon} from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons/lib";

type Props = {
	platforms: Platform[];
};

const PlatformIconList = ({ platforms }: Props) => {
    // * This is called an INDEX SIGNATURE -> No need to specify names of each key like name: string
    const iconMap: { [key: string] : IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		linux: FaLinux,
		mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe,
	};
    
	return (
		<HStack marginY={3}>
			{/* We do not need to destructure 'platform' as it is the real platform object*/}
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} key={platform.id} color={'gray.500'}></Icon>
			))}
		</HStack>
	);
};

export default PlatformIconList;
