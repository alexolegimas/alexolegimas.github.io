#!/usr/bin/env bash
set -euo pipefail
cd /usr/local/google/home/imasa/aleximas-site

export GIT_SSH_COMMAND="ssh -i /usr/local/google/home/imasa/.ssh/id_ed25519_aleximas_site -o IdentitiesOnly=yes"

git add -A
git commit -m "${1:-Update Alex Imas personal website}" || true
git push origin main
echo "Deployed to https://alexolegimas.github.io/"
