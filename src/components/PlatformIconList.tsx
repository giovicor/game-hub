import { BsGeoFill, BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";
import {
  SiAtari,
  SiCommodore,
  SiD3Dotjs,
  SiNintendo,
  SiSega,
} from "react-icons/si";

import type { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import type { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    "neo-geo": BsGeoFill,
    nintendo: SiNintendo,
    sega: SiSega,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    "3do": SiD3Dotjs,
    "commodore-amiga": SiCommodore,
  };

  /*
  const getPlatformFamily = (detail: string): string => {
    if (detail.startsWith("android")) {
      return "android";
    } else if (detail.startsWith("apple")) {
      return "apple";
    } else if (detail.startsWith("mac")) {
      return "nintendo";
    } else if (detail.startsWith("nintendo")) {
      return "mac";
    } else if (detail.startsWith("pc")) {
      return "pc";
    } else if (detail.startsWith("playstation")) {
      return "playstation";
    } else if (detail.startsWith("xbox")) {
      return "xbox";
    } else {
      return "web";
    }
  };
  */

  /*
  return (
    <HStack>
      {platforms
        .map((platform) => getPlatformFamily(platform.slug))
        .filter((value, index, self) => self.indexOf(value) === index)
        .sort()
        .map((value) => (
          // <Text key={index}>{value}</Text>
          <Icon key={value} as={iconMap[value]} />
        ))}
    </HStack>
  );
  */

  /*
  platforms.forEach((p) => {
    if (!iconMap[p.slug]) {
      console.log("platform not found");
      console.log(p);
    }
  });
  */

  return (
    <HStack my={1}>
      {platforms.map((platform) => (
        // <Text key={platform.id}>{platform.slug}</Text>
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
