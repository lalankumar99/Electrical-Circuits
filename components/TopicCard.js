import Link from "next/link";

export default function TopicCard({
  name,
  href,
  icon = "/icons/notes.svg"
}) {
  return (
    <Link
      href={href}
      className="card"
    >
      <div className="topic-card">

        <div className="topic-icon">
          <img
            src={icon}
            alt=""
          />
        </div>

        <div>

          <div className="topic-title">
            {name}
          </div>

          <div className="topic-path">
            Study Notes
          </div>

        </div>

      </div>
    </Link>
  );
}