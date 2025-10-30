# Accessories

Helpers to add services like Postgres/Redis using Compose fragments.

## Postgres
```bash
hl accessory add <app_name> postgres --version 16
```
- Writes `compose.postgres.yml`
- Adds `depends_on` with health
- Updates `.env` with `POSTGRES_*` and `DATABASE_URL`
- Patches systemd to run `-f compose.yml -f compose.postgres.yml`

## Redis
```bash
hl accessory add <app_name> redis --version 7
```
- Writes `compose.redis.yml`
- Sets `REDIS_URL=redis://redis:6379/0`
