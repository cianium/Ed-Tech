# Operations and incident response — draft only
- Environment split: local, CI, staging, production with separate credentials and data; never production secrets in PRs.
- Logs: minimize identifiers and content, avoid password, token, consent evidence and child profiles. Access and retention set by owner before production.
- Incidents: block affected route/flag, preserve minimal audit evidence, notify designated incident owner, revoke exposed tokens, coordinate lawful notices and fix with reviewed regression tests.
- Backup: exercise restore in isolated staging; track actual RPO/RTO. None exists yet.
- No monitoring, legal response owner, or live deploy has been established by M0.
