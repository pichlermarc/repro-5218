# Repro for https://github.com/open-telemetry/opentelemetry-js/issues/5218

## How to run

- `npm ci`
- `npm run build`
- `npm run preview` (fails since it cannot find the exporter file)
- `grep -rl "^ \* TODO\: Replace export \* with named exports before next major version$" | xargs sed -i .bak 's/Replace export \* with/Replace wildcard export with/g'`
  - replaces `export *` in the offending comment with `wildcard export` (not the most elegant way of doing things and certainly not safe but it does the trick for this demo)
- `npm run build`
- `npm run preview` (works fine)
