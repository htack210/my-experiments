import "./globals.css";

export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
  keywords: ["Next.js", "React", "Course"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
