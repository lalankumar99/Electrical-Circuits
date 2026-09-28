import {
  getGithubTree,
  formatTitle,
  pathToSlug
} from "@/lib/github";

import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import FolderCard from "@/components/FolderCard";
import TopicCard from "@/components/TopicCard";
import Search from "@/components/Search";
import BottomNav from "@/components/BottomNav";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const tree = await getGithubTree();

  const folders = tree
    .filter((item) => item.type === "tree")
    .filter(
      (item) => !item.path.includes("/")
    );

  const files = tree
    .filter(
      (item) =>
        item.type === "blob" &&
        item.path.toLowerCase().endsWith(".md")
    )
    .map((item) => ({
      name: formatTitle(
        item.path.split("/").pop()
      ),
      path: item.path,
      slug: pathToSlug(item.path)
    }));

  return (
    <main className="app-container electrical-grid">

      <Header />

      <section className="hero">

        <div className="circuit-glow" />

        <div className="content-container">

          <div className="hero-content">

            <div className="hero-badge">

              <img
                src="/icons/electrical.svg"
                alt=""
              />

              Electrical Engineering

            </div>

            <h1>
              Electrical
              <br />
              <span>Circuit and Network</span>
            </h1>

            <p className="hero-description">
              Study Electrical Circuit and Network
              through organized notes, diagrams,
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
                Start Learning
              </a>

              <a
                href="/practical"
                className="secondary-button"
              >
                Practical
              </a>

            </div>

          </div>

        </div>

      </section>


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
                Study materials from GitHub.
              </p>

            </div>

          </div>


          {folders.length > 0 ? (

            <div className="card-grid">

              {folders.map((folder) => (

                <FolderCard
                  key={folder.path}
                  name={formatTitle(
                    folder.path.split("/").pop()
                  )}
                  href={`/topic/${folder.path
                    .split("/")
                    .map((part) =>
                      encodeURIComponent(
                        part.toLowerCase()
                      )
                    )
                    .join("/")}`}
                />

              ))}

            </div>

          ) : (

            <div className="empty-state">

              <h2>
                No Study Material
              </h2>

              <p>
                Add Markdown folders and files to GitHub.
              </p>

            </div>

          )}

        </div>

      </section>


      <section className="section">

        <div className="content-container">

          <div className="section-header">

            <div>

              <h2 className="section-title">
                Topics
              </h2>

              <p className="section-description">
                Available Markdown study notes.
              </p>

            </div>

          </div>


          {files.length > 0 && (

            <div className="card-grid">

              {files.slice(0, 6).map((file) => (

                <TopicCard
                  key={file.path}
                  name={file.name}
                  href={`/topic/${file.slug}`}
                />

              ))}

            </div>

          )}

        </div>

      </section>


      <section className="section">

        <div className="content-container">

          <Search files={files} />

        </div>

      </section>


      <section className="section">

        <div className="content-container">

          <div className="card">

            <div className="section-header">

              <div>

                <h2 className="section-title">
                  Quick Formula
                </h2>

                <p className="section-description">
                  Important electrical relationship.
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
            Electrical Circuit and Network
          </div>

          <div style={{ marginTop: "5px" }}>
            Powered by GitHub • LK Study Studio
          </div>

        </div>

      </footer>


      <BottomNav />

    </main>
  );
}