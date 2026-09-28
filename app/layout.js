import "./globals.css";

export const metadata = {
  title: "Electrical Circuit and Network",
  description:
    "Electrical Circuit and Network study notes, circuit diagrams, formulas and practical experiments.",
  applicationName: "Electrical Circuit and Network",
  keywords: [
    "Electrical Circuit",
    "Electrical Network",
    "Electrical Engineering",
    "Circuit Theory",
    "Polytechnic",
    "Study Notes"
  ],
  authors: [
    {
      name: "LK Study Studio"
    }
  ],
  themeColor: "#07111f"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}