"use client";

import { useState } from "react";

export default function MarkdownReader({
  title,
  html
}) {
  const [landscape, setLandscape] = useState(false);

  async function toggleLandscape() {
    try {
      if (!landscape) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }

        if (screen.orientation?.lock) {
          await screen.orientation.lock("landscape");
        }

        setLandscape(true);
      } else {
        if (screen.orientation?.unlock) {
          screen.orientation.unlock();
        }

        if (document.fullscreenElement) {
          await document.exitFullscreen();
        }

        setLandscape(false);
      }
    } catch {
      setLandscape(!landscape);
    }
  }

  return (
    <div
      className={
        landscape
          ? "document-reader landscape-mode"
          : "document-reader"
      }
    >
      <div className="document-header">

        <a
          href="/"
          className="back-button"
        >
          Back
        </a>

        <div className="document-title">
          {title}
        </div>

        <button
          type="button"
          className="reader-control"
          onClick={toggleLandscape}
          aria-label={
            landscape
              ? "Exit landscape mode"
              : "Open landscape mode"
          }
        >
          <img
            src={
              landscape
                ? "/icons/portrait.svg"
                : "/icons/landscape.svg"
            }
            alt=""
          />
        </button>

      </div>

      <article
        className="markdown-content"
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </div>
  );
}