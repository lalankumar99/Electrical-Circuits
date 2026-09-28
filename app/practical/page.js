import {
  getGithubMarkdownFilesInFolder,
  pathToSlug,
  formatTitle
} from "@/lib/github";

import PracticalCard from "@/components/PracticalCard";

export const dynamic = "force-dynamic";

export default async function PracticalPage() {
  const files = await getGithubMarkdownFilesInFolder(
    "Practical"
  );

  return (
    <main className="app-container electrical-grid">

      <header className="site-header">
        <div className="header-inner">

          <a
            href="/"
            className="brand"
          >
            <div className="brand-icon">
              <img
                src="/icons/electrical.svg"
                alt=""
              />
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

        </div>
      </header>


      <section className="section">

        <div className="content-container">

          <div className="section-header">

            <div>

              <h1 className="section-title">
                Practical
              </h1>

              <p className="section-description">
                Electrical experiments and practical projects.
              </p>

            </div>

          </div>


          {files.length === 0 ? (

            <div className="empty-state">

              <h2>
                No Practical Available
              </h2>

              <p>
                Add Markdown practical files inside the
                Practical folder on GitHub.
              </p>

            </div>

          ) : (

            <div className="card-grid">

              {files.map((file) => (

                <PracticalCard
                  key={file.path}
                  name={formatTitle(file.name)}
                  href={`/topic/${pathToSlug(file.path)}`}
                />

              ))}

            </div>

          )}

        </div>

      </section>


      <nav className="bottom-nav">

        <div className="bottom-nav-inner">

          <a href="/">

            <img
              src="/icons/home.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>
              Home
            </span>

          </a>


          <a href="/#study-material">

            <img
              src="/icons/unit.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>
              Units
            </span>

          </a>


          <a
            href="/practical"
            className="active"
          >

            <img
              src="/icons/practical.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>
              Practical
            </span>

          </a>


          <a href="/#search">

            <img
              src="/icons/search.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>
              Search
            </span>

          </a>

        </div>

      </nav>

    </main>
  );
}