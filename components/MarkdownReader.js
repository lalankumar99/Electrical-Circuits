"use client";

import { useEffect, useState } from "react";

export default function MarkdownReader({
  title,
  html
}) {
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      if (!document.fullscreenElement) {
        setLandscape(false);

        if (screen.orientation?.unlock) {
          screen.orientation.unlock();
        }
      }
    }

    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  async function toggleLandscape() {
    try {
      if (!landscape) {
        const reader =
          document.querySelector(
            ".document-reader"
          );

        if (reader?.requestFullscreen) {
          await reader.requestFullscreen();
        }

        if (screen.orientation?.lock) {
          try {
            await screen.orientation.lock(
              "landscape"
            );
          } catch {}
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
      setLandscape(true);
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
              ? "Exit fullscreen"
              : "Open fullscreen landscape"
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