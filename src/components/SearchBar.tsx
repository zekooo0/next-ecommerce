"use client";

import { FormEvent } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex flex-1 justify-between items-center gap-4 bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
