# FAQ

**Where does the build context come from?**  
From the **bare repo** you push to; `hl` uses `git archive` for the exact commit — no persistent working tree.

**Why not Watchtower?**  
Rollouts remain explicit and health‑gated in one place (the deploy command).

**Can I pin a version?**  
Yes. Use Docker image tags directly or `hl rollback <sha>` to retag `:latest`.

**Can health checks use a public URL?**  
Yes — set `health.mode: http` with an external URL, though Docker‑mode is preferred.
