#!/bin/bash

git config user.name "Travis-CI"
git config user.email "travis@danielpalstra.com"

echo "Cloning target repository"
git clone --branch ${TARGET_BRANCH} "https://${GH_REF}" public

echo "Running hugo"
hugo

echo "Publishing to branch ${TARGET_BRANCH}"
cd public
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master > /dev/null 2>&1

echo "Done"
