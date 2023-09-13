import {
  FaAndroid,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import { Platform } from "./../hooks/useFetchGames";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: Platform[];
}

const PlatformListIcons = ({ platforms }: Props) => {
  const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    xbox: FaXbox,
    web: BsGlobe,
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color = '#839496' />
      ))}
    </>
  );
};

export default PlatformListIcons;
