import React from "react";

type Props = {};

export default async function About({}: Props) {
  const result = await fetch(
    "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs"
  );
  const data = await result.json();
  await delay(1000);

  return (
    <div>
      About
      <ul>
        {data.youtubes.map((e: any) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
