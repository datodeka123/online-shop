import { createContext, useContext, useState } from "react";

type SearchType = string;

type SearchContextType = {
  search: SearchType;
  setSearch: React.Dispatch<React.SetStateAction<SearchType>>;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export default function SearchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<SearchType>("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("inputContext is used outside the provider");
  return context;
};
