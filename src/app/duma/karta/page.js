import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <>
      <h1>Karta</h1>
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
        <li>
          <Link href="/duma/karta">go to karta</Link>
        </li>
      </ul>
      <div>duma</div>
    </>
  );
}
