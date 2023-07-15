"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

import { Content } from "./Content";

export default function Page() {
  const params = useParams();

  const id = params.id;

  if (id == null) {
    // Static pre-generated HTML
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Page for {id}</h1>
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
      <hr />
      <Content id={id} />
    </>
  );
}
