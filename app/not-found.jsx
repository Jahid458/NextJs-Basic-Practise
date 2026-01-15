import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center ">
      <h1>Not Found Page</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
