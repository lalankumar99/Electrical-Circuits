export default function LoadingScreen() {
  return (
    <main className="loading-screen">
      <div className="loading-content">

        <img
          src="/icons/electrical.svg"
          alt="Electrical"
          className="loading-logo"
        />

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