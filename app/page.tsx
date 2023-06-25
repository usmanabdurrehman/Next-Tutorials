"use client";
import React from "react";

export const revalidate = 3000;

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
    next: { revalidate: 3000 },
  });
  return res.json();
};

export default async function Home() {
  const posts = await getPosts();
  return <div>Home Page</div>;
}
