import {
  getGithubMarkdownContent,
  formatTitle,
  pathToSlug
} from "@/lib/github";

import { markdownToHtml } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export default async function TopicPage({ params }) {
  const { slug } = await params;

  const filePath = `${slug.join("/")}.md`;

  let content;

  try {
    content = await getGithubMarkdownContent(filePath);
  } catch {
    return (
      <main className="app-container">
        <section className="section">
          <div className="content-container">
            <div className="empty-state">
              <h1>Topic Not Found</h1>
              <p>
                The requested study material could not be found.
              </p>

              <a
                href="/"
                className="primary-button"
              >
                Go Home
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const html = await markdownToHtml(content);

  const fileName = slug[slug.length - 1];

  const title = formatTitle(fileName);

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

          <div className="document-reader">

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

            </div>


            <article
              className="markdown-content"
              dangerouslySetInnerHTML={{
                __html: html
              }}
            />

          </div>

        </div>

      </section>


      <nav className="bottom-nav">

        <div className="bottom-nav-inner">

          <a
            href="/"
            className="active"
          >
            <img
              src="/icons/home.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>Home</span>
          </a>


          <a href="/#study-material">

            <img
              src="/icons/unit.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>Units</span>

          </a>


          <a href="/practical">

            <img
              src="/icons/practical.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>Practical</span>

          </a>


          <a href="/">

            <img
              src="/icons/search.svg"
              alt=""
              className="bottom-nav-icon"
            />

            <span>Search</span>

          </a>

        </div>

      </nav>

    </main>
  );
}