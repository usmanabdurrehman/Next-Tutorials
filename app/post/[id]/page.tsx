import React from "react";

export const dynamic = "auto";

const getPost = async (id: string) => {
  const res = await fetch(`https://hub.dummyapis.com/delay?seconds=${id}`, {
    // cache: "force-cache",
  });
  const payload = await res.text();
  console.log("Query is running");
  return payload;
};

export default async function Post({ params }: { params: { id: string } }) {
  const posts = await getPost(params.id);
  return <div>Home Page</div>;
}
