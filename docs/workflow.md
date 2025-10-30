# Typical Workflow

1) **Bootstrap**: `hl init ...`
2) **Secrets/Env**: `hl env set NAME=value`
3) Build secrets: `hl env set --build NAME=value`
3) **(Optional) Add accessories**: `hl accessory add <app_name> [redis|postgres]`
5) **Push to deploy**.
6) **Rollback** if needed.
