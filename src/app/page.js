import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/stuff/1">go to 1</Link>
      </li>
      <li>
        <Link href="/stuff/2">go to 2</Link>
      </li>
      <li>
        <Link href="/test">go to test</Link>
      </li>
    </ul>
  );
}
