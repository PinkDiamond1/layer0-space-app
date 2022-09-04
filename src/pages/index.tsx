import * as React from "react";
import type { HeadFC } from "gatsby";
import "./css/index.css";

function IndexPage() {
  return <main></main>;
}

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Layer 0 Space</title>
    <meta
      name="description"
      content="Cross-consensus heterogeneous asset swap based on LayerZero messaging protocol and Polkadot XCM"
    />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://layer0.space/" />
    <meta property="twitter:title" content="Layer 0 Space" />
    <meta
      property="twitter:description"
      content="Cross-consensus heterogeneous asset swap based on LayerZero messaging protocol and Polkadot XCM"
    />
    <meta
      property="twitter:image"
      content="https://raw.githubusercontent.com/yudus-labs/layer0-space-app/master/static/twitter-preview.png"
    />

    <meta property="og:url" content="https://layer0.space" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Layer 0 Space" />
    <meta
      property="og:description"
      content="Cross-consensus heterogeneous asset swap based on LayerZero messaging protocol and Polkadot XCM"
    />
    <meta
      property="og:image"
      content="https://raw.githubusercontent.com/yudus-labs/layer0-space-app/master/static/twitter-preview.png"
    />
  </>
);
