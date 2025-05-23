import Link from "next/link";
import Header from "@/components/header";
export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link> | <Link href="/blog">My Blog</Link>
      </p>
    </main>
  );
}
