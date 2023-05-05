import React from "react";
import LayoutSegment from "./LayoutSegment";

export default function HomeLayout({ children }) {
  return (
    <div>
      <LayoutSegment /> {children}
    </div>
  );
}
