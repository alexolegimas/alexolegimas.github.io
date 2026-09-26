#!/usr/bin/env bash
set -euo pipefail
cd /usr/local/google/home/imasa/aleximas-site

export GIT_SSH_COMMAND="ssh -i /usr/local/google/home/imasa/.ssh/id_ed25519_aleximas_site -o IdentitiesOnly=yes"

VER=$(date +%s)
sed -i -E "s/\?v=[a-zA-Z0-9_]+/?v=${VER}/g" index.html

git add -A
git commit -m "${1:-Update Alex Imas personal website}" || true
git push origin main
echo "Deployed to https://www.aleximas.com/"
