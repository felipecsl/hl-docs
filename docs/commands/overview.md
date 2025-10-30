# Command Overview

> Names/flags may differ depending on implementation maturity, but this is the intended surface.

- `hl init --app <name> --image <ref> --domain <host> --port <num> [--network traefik_proxy] [--resolver myresolver]`
- `hl deploy --app <name> --sha <sha> [--branch <name>]`
- `hl rollback <app> <sha>`
- `hl accessory add <app> postgres [--version <v>] [--user <u>] [--db <name>] [--password <p>]`
- `hl accessory add <app> redis [--version <v>]`
- `hl env set <app> KEY=VALUE`
- `hl env set --build <app> KEY=VALUE`
- `hl env ls <app>`
