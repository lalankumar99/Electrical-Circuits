import Link from "next/link";

export default function FolderCard({
  name,
  href,
  icon = "/icons/folder.svg"
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
        Study topics
      </div>
    </Link>
  );
}