import { Button, Menu, Portal } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by Relevance
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item key="Relevance" value="Relevance">
              Relevance
            </Menu.Item>
            <Menu.Item key="Date added" value="Date added">
              Date added
            </Menu.Item>
            <Menu.Item key="Name" value="Name">
              Name
            </Menu.Item>
            <Menu.Item key="Release date" value="Release date">
              Release date
            </Menu.Item>
            <Menu.Item key="Popularity" value="Popularity">
              Popularity
            </Menu.Item>
            <Menu.Item key="Average rating" value="Average rating">
              Average rating
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
