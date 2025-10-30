# `hl init`

Create per‑app runtime home, Compose file(s), `hl.yml`, and a systemd unit.

## Usage
```bash
hl init \
  --app <name> \
  --image <registry/ref> \
  --domain <host> \
  --port <num> \
  [--network traefik_proxy] \
  [--resolver myresolver]
```

## Output
- `/home/<user>/hl/apps/<app>/{compose.yml,.env,hl.yml}`
- `app-<app>.service` (enabled)
