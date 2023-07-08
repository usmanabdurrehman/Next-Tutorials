import React from "react";

const getPosts = async () => {
  const res = await fetch(`https://hub.dummyapis.com/delay?seconds=5`, {
    // cache: "force-cache",
  });
  const payload = await res.text();
  // console.log({ payload });
  console.log("Query is running");
  return payload;
};

export default async function Home() {
  const posts = await getPosts();
  return <div>Home Page</div>;
}
