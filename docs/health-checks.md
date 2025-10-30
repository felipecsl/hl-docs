# Health Checks

`hl` runs a short‑lived container on the app network to hit `http://<service>:<port><path>`.

Optional Compose healthcheck:
```yaml
services:
  recipes:
    healthcheck:
      test: ["CMD-SHELL", "wget -qO- http://localhost:8080/healthz >/dev/null 2>&1 || exit 1"]
      interval: 5s
      timeout: 3s
      retries: 10
```
