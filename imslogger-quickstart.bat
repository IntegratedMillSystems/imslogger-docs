@echo off

git clone https://github.com/imslogger/imslogger-server %1
cd %1
git rm -r scripts
git submodule add https://github.com/imslogger/imslogger-cmd scripts
cd scripts
git rm -r imslogger
git submodule add https://github.com/imslogger/imslogger-py imslogger