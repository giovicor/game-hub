import { Input, InputGroup } from "@chakra-ui/react";

import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router";
import { useRef } from "react";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
