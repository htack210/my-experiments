import Link from "next/link";
import { Blog } from "@/components/header";

export default function blog() {
  return (
    <main>
      <Blog />
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </main>
  );
}
