import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/" rel="noopener noreferrer">
      <PageHeader title="Yogi Boo NFT" subTitle="🐈‍⬛  Best NFT collection ever" style={{ cursor: "pointer" }} />
    </a>
  );
}
