import React, { useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

export default function Home() {
  const history = useHistory();
  useEffect(() => {
    history.push("/notes/home");
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <span>
          If you are not redirected automatically, follow this{" "}
          <Link href="/notes/home">link</Link>.
        </span>
      </div>
    </Layout>
  );
}
