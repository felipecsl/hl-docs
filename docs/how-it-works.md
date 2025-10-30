# How It Works

1. You **Push** to a bare repo on the server.
2. **git post-receive hook** triggers hl deploy, passes `--sha` and `--branch`.
3. **Export commit** via `git archive` to an ephemeral build context.
4. **Build & push** Docker image tags: `:<shortsha>`, `:<branch>-<shortsha>`, `:latest`.
5. **Optional migrations** run in a one‑off container with the new tag.
6. **Retag & restart**: retag `:latest` to the new SHA and restart via systemd (Compose under the hood).
7. **Health‑gate**: wait until the app is healthy.

### Runtime layout (per app)
```
~/hl/apps/<app>/
  compose.yml
  compose.<accessory>.yml
  .env
  hl.yml
  pgdata/ ...
systemd: app-<app>.service
```
