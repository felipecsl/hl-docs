---
title: hl — tiny, deterministic git-push deploys
hide_table_of_contents: true
---

import Link from '@docusaurus/Link';

<div className="hero hero--primary">
  <div className="container">
    <p className="hero__subtitle">Tiny, deterministic “git‑push deploys” for a single host</p>
    <div>
      <Link className="button button--secondary button--lg" to="/docs/getting-started">
        Get Started
      </Link>
      <Link className="button button--light button--lg" style={{marginLeft: '0.5rem'}} to="/docs/commands/overview">
        Commands
      </Link>
    </div>
  </div>
</div>

<section className="container" style={{paddingTop: '2rem', paddingBottom: '3rem'}}>
  <div className="row">
    <div className="col col--4">
      <h3>Deterministic</h3>
      <p>Deploy exactly the pushed commit — no working tree drift. Images are built from <code>git archive</code> of the SHA.</p>
    </div>
    <div className="col col--4">
      <h3>Explicit</h3>
      <p>No auto-updaters. <code>hl</code> performs restarts and gates on health, so you always know what’s running.</p>
    </div>
    <div className="col col--4">
      <h3>Boring Primitives</h3>
      <p>Git, Docker (Buildx), Traefik, Docker Compose, systemd. Easy to reason about, easy to recover.</p>
    </div>
  </div>
</section>
