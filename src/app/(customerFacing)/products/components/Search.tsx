"use client";
import { useSearchContext } from "./SearchContextProvider";

export default function Search() {
  const { search, setSearch } = useSearchContext();
  return (
    <input
      className="w-[100%] max-w-[600px] mx-auto h-[40px] border-2 border-black text-center mb-2 rounded-md"
      placeholder="ძიება"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
