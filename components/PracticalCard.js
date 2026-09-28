import Link from "next/link";

export default function PracticalCard({
  name,
  href,
  icon = "/icons/practical.svg"
}) {
  return (
    <Link
      href={href}
      className="card folder-card"
    >
      <div className="folder-icon">
        <img
          src={icon}
          alt=""
        />
      </div>

      <div className="folder-title">
        {name}
      </div>

      <div className="folder-meta">
        Experiment and project
      </div>
    </Link>
  );
}