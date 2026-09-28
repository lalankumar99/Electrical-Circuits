export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <a
          href="/"
          className="brand"
        >
          <div className="brand-icon">
            <img
              src="/icons/electrical.svg"
              alt="Electrical Circuit"
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

        <div className="search-box">
          <img
            src="/icons/search.svg"
            alt=""
            className="search-icon"
          />

          <input
            type="search"
            placeholder="Search topics..."
            aria-label="Search topics"
          />
        </div>

      </div>
    </header>
  );
}