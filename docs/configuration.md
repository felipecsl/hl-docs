# Configuration (`hl.yml`)

Server‑owned file at `/home/<user>/hl/apps/<app>/hl.yml`.

```yaml
app: recipes
image: registry.example.com/recipes
domain: recipes.example.com
servicePort: 8080
resolver: myresolver
network: traefik_proxy
platforms: linux/amd64

health:
  url: http://recipes:8080/healthz
  interval: 2s
  timeout: 45s

migrations:
  command: ["bin/rails", "db:migrate"]
  env:
    RAILS_ENV: "production"

secrets:
  - RAILS_MASTER_KEY
  - SECRET_KEY_BASE
```
