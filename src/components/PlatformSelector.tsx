import { Button, Menu, Portal } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) {
    return null;
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item key={platform.id} value={platform.name}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
