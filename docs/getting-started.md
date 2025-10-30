# Getting Started

This guide shows a single‑host setup where a Git push to a bare repo on the server triggers a build and restart.

## Requirements
- Git reachable over SSH
- Docker with Buildx
- Traefik (reverse proxy) already set up on the destination host
- systemd available

## Quickstart
```bash
hl init \
  --app <app_name> \
  --image registry.example.com/<app_name> \
  --domain <app_name>.example.com \
  --port 8080
```
Creates the app runtime diretory, git repo and a `systemd` unit.

## Push to deploy
```bash
git remote add \
  production \
  ssh://<user>@<host>/home/<user>/hl/git/<app_name>.git
git push production master
```
