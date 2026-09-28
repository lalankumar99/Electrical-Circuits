"use client";

import { useMemo, useState } from "react";

export default function Search({ files = [] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return [];
    }

    return files.filter((file) =>
      file.name.toLowerCase().includes(value)
    );
  }, [files, query]);

  return (
    <div
      className="search-container"
      id="search"
    >
      <div className="search-box">

        <img
          src="/icons/search.svg"
          alt=""
          className="search-icon"
        />

        <input
          type="search"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search topics..."
          aria-label="Search topics"
        />

      </div>

      {query.trim() && (
        <div className="search-results">

          {results.length === 0 ? (
            <div className="empty-state">
              <p>
                No topics found.
              </p>
            </div>
          ) : (
            results.map((file) => (
              <a
                key={file.path}
                href={`/topic/${file.slug}`}
                className="search-result"
              >
                <img
                  src="/icons/notes.svg"
                  alt=""
                />

                <span>
                  {file.name}
                </span>
              </a>
            ))
          )}

        </div>
      )}
    </div>
  );
}