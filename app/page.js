"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">⚡</div>

          <div className="loading-title">
            Electrical Circuit
          </div>

          <div className="loading-text">
            Loading Study Materials...
          </div>

          <div className="loading-line" />
        </div>
      </main>
    );
  }

  return (
    <main className="app-container electrical-grid">

      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">

          <a href="/" className="brand">
            <div className="brand-icon">
              ⚡
            </div>

            <div className="brand-text">
              <div className="brand-title">
                Electrical Circuit
              </div>

              <div className="brand-subtitle">
                LK Study Studio
              </div>
            </div>
          </a>

          <div className="search-box">
            <span className="search-icon">
              🔍
            </span>

            <input
              type="search"
              placeholder="Search topics..."
              aria-label="Search topics"
            />
          </div>

        </div>
      </header>


      {/* HERO */}
      <section className="hero">
        <div className="circuit-glow" />

        <div className="content-container">
          <div className="hero-content">

            <div className="hero-badge">
              ⚡ Electrical Engineering
            </div>

            <h1>
              Electrical
              <br />
              <span>Circuit and Network</span>
            </h1>

            <p className="hero-description">
              Study your Electrical Circuit and Network
              syllabus through organized notes, diagrams,
              formulas and practical experiments.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "28px"
              }}
            >
              <a
                href="#study-material"
                className="primary-button"
              >
                ⚡ Start Learning
              </a>

              <a
                href="/practical"
                className="secondary-button"
              >
                🧪 Practical
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* STUDY MATERIAL */}
      <section
        className="section"
        id="study-material"
      >
        <div className="content-container">

          <div className="section-header">
            <div>
              <h2 className="section-title">
                Study Materials
              </h2>

              <p className="section-description">
                Organized directly from your GitHub repository.
              </p>
            </div>
          </div>


          <div className="card-grid">

            <a
              href="/topic/basic-of-electrical-circuit"
              className="card folder-card"
            >
              <div className="folder-icon">
                📁
              </div>

              <div className="folder-title">
                Basic Of Electrical Circuit
              </div>

              <div className="folder-meta">
                Study topics →
              </div>
            </a>


            <a
              href="/practical"
              className="card folder-card"
            >
              <div className="folder-icon">
                🧪
              </div>

              <div className="folder-title">
                Electrical Practical
              </div>

              <div className="folder-meta">
                Experiments and projects →
              </div>
            </a>


            <div className="card folder-card">
              <div className="folder-icon">
                📐
              </div>

              <div className="folder-title">
                Circuit Diagrams
              </div>

              <div className="folder-meta">
                Coming from Markdown →
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* FEATURE CARDS */}
      <section className="section">
        <div className="content-container">

          <div className="section-header">
            <div>
              <h2 className="section-title">
                Study Tools
              </h2>

              <p className="section-description">
                Everything focused on Electrical Circuit study.
              </p>
            </div>
          </div>


          <div className="card-grid">

            <div className="card">
              <div className="topic-card">

                <div className="topic-icon">
                  📖
                </div>

                <div>
                  <div className="topic-title">
                    Markdown Notes
                  </div>

                  <div className="topic-path">
                    Clean document reader
                  </div>
                </div>

              </div>
            </div>


            <div className="card">
              <div className="topic-card">

                <div className="topic-icon">
                  ⚡
                </div>

                <div>
                  <div className="topic-title">
                    Circuit Diagrams
                  </div>

                  <div className="topic-path">
                    SVG and images supported
                  </div>
                </div>

              </div>
            </div>


            <div className="card">
              <div className="topic-card">

                <div className="topic-icon">
                  🧪
                </div>

                <div>
                  <div className="topic-title">
                    Practical Learning
                  </div>

                  <div className="topic-path">
                    Experiments and projects
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* FORMULA PREVIEW */}
      <section className="section">
        <div className="content-container">

          <div className="card">

            <div className="section-header">
              <div>
                <h2 className="section-title">
                  ⚡ Quick Formula
                </h2>

                <p className="section-description">
                  Important electrical relationships.
                </p>
              </div>
            </div>

            <div
              style={{
                padding: "24px",
                borderRadius: "14px",
                background: "#071421",
                border: "1px solid rgba(0,190,255,.12)",
                textAlign: "center",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "clamp(22px, 5vw, 36px)",
                color: "#00e5ff"
              }}
            >
              V = I × R
            </div>

          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 0 100px",
          color: "#71849a",
          textAlign: "center",
          fontSize: "12px"
        }}
      >
        <div className="content-container">
          <div>
            ⚡ Electrical Circuit and Network
          </div>

          <div style={{ marginTop: "5px" }}>
            Powered by GitHub • LK Study Studio
          </div>
        </div>
      </footer>


      {/* MOBILE NAV */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">

          <a
            href="/"
            className="active"
          >
            <span className="bottom-nav-icon">
              🏠
            </span>
            Home
          </a>

          <a href="#study-material">
            <span className="bottom-nav-icon">
              📚
            </span>
            Units
          </a>

          <a href="/practical">
            <span className="bottom-nav-icon">
              🧪
            </span>
            Practical
          </a>

          <a href="#search">
            <span className="bottom-nav-icon">
              🔍
            </span>
            Search
          </a>

        </div>
      </nav>

    </main>
  );
}