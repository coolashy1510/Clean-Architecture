#!/usr/bin/env bash

set -e

REPO_TOP_LEVEL="$(git rev-parse --show-toplevel)"
pushd "${REPO_TOP_LEVEL}"
trap 'popd' ERR

cd ./iac-scripts
rm ./*.tfvars || true
rm ./*.tfvars.json || true
rm backend.conf || true
cp ./environments/"$1"/* ./

popd
