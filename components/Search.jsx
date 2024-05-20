"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import SearchResult from "./SearchResult";

export default function Search({ docs }) {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");

  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });

    setSearchResult(found);
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setTerm(value);
    doSearch(value);
  }

  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        >
          <Image
            alt="search"
            src="/search.svg"
            className="h-5 w-5"
            height={50}
            width={50}
          />
          <input
            type="text"
            onChange={handleChange}
            value={term}
            placeholder="Search..."
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>
      <div>
        {term && term.trim().length > 0 && (
          <SearchResult results={searchResult} term={term} />
        )}
      </div>
    </>
  );
}

// import { useDebounce } from "@/hooks/useDebounce";
// import Image from "next/image";
// import { useState } from "react";
// import SearchResult from "./SearchResult";

// export default function Search({ docs }) {
//   const [searchResult, setSearchResult] = useState([]);
//   const [term, setTerm] = useState("");

//   const doSearch = useDebounce((term) => {
//     const found = docs.filter((doc) => {
//       return doc.title.toLowerCase().includes(term.toLowerCase());
//     });

//     setSearchResult(found);
//   }, 500);

//   function handleChange(e) {
//     const value = e.target.value;
//     console.log(value);
//     setTerm(value);
//     doSearch(value);
//   }

//   return (
//     <>
//       <div className="lg:block lg:max-w-md lg:flex-auto">
//         <button
//           type="button"
//           class="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
//         >
//           <Image
//             alt="search"
//             src="/search.svg"
//             class="h-5 w-5"
//             height={50}
//             width={50}
//           />
//           <input
//             type="text"
//             onChange={handleChange}
//             value={term}
//             placeholder="Search..."
//             class="flex-1 focus:border-none focus:outline-none"
//           />
//         </button>
//       </div>
//       <div>
//         {term && term.trim().length > 0 && (
//           <SearchResult results={searchResult} term={term} />
//         )}
//       </div>
//     </>
//   );
// }

// "use client";

// import { useDebounce } from "@/hooks/useDebounce";
// import Image from "next/image";
// import { useState } from "react";
// import SearchResult from "./SearchResult";

// export default function Search({ docs }) {
//   const [searchResult, setSearchResult] = useState([]);
//   const [term, setTerm] = useState("");

//   const doSearch = (searchTerm) => {
//     const found = docs.filter((doc) => {
//       return doc.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//     setSearchResult(found);
//   };

//   const debouncedSearch = useDebounce(() => doSearch(term), 500);

//   function handleChange(e) {
//     const value = e.target.value;
//     setTerm(value);
//     debouncedSearch;
//   }

//   return (
//     <>
//       <div className="lg:block lg:max-w-md lg:flex-auto">
//         <button
//           type="button"
//           className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
//         >
//           <Image
//             alt="search"
//             src="/search.svg"
//             className="h-5 w-5"
//             height={50}
//             width={50}
//           />
//           <input
//             type="text"
//             onChange={handleChange}
//             value={term}
//             placeholder="Search..."
//             className="flex-1 focus:border-none focus:outline-none"
//           />
//         </button>
//       </div>
//       <div>
//         {term && term.trim().length > 0 && (
//           <SearchResult results={searchResult} term={term} />
//         )}
//       </div>
//     </>
//   );
// }
