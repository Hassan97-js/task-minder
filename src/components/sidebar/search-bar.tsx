"use client";

import { useState } from "react";
import { RxMagnifyingGlass as SearchIcon } from "react-icons/rx";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "../ui/command";
import { Button } from "../ui/button";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="w-full max-w-[31.25rem] justify-start gap-2"
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}>
        <SearchIcon />
        <span className="text-[0.75rem] font-normal">Search</span>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default SearchBar;
