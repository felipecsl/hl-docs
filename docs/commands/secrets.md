# `hl secrets`

Manage runtime secrets stored in the app’s `.env` on the server (mode 0600). Do not bake secrets into images.

## Set
```bash
hl secrets set <app> KEY=VALUE [KEY=VALUE ...]
```

## List
```bash
hl secrets ls <app>
```
*Values are redacted in the listing.*
