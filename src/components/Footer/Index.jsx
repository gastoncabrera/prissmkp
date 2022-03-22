import React from "react";
import Link from "next/link";

export default function () {
  return (
    <div>
      <div>
        <div>
          <span>PRISMKP</span> Corrientes Capital
        </div>
        <div>
          <ul>
            <Link href={``}>
              <a>Instagram</a>
            </Link>
            <Link href={``}>
              <a>Facebook</a>
            </Link>
            <Link href={``}>
              <a>Email</a>
            </Link>
            <Link href={``}>
              <a>Whatsapp</a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
