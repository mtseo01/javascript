#!/bin/bash

# usage
function usage() {
  echo "
  Usage
  bash auto_task.sh [option]
  option :
    [-p]  | [--push] : file to stage & commit & push to remote
  "
}

case $1 in
# Auto git push
-p | --push)
  # git add
  read -p "Which do you want to add to stage? [filename] : " addFile
  git add $addFile
  echo "========================================="
  git status -s
  echo "========================================="
  echo "Check your git status."

  # git commit
  read -p "Write the commit message : " commitMessage
  git commit -m "$commitMessage"
  echo "😊 commited with Message: $commitMessage 😊"

  # git push
  currentBranch=$(git branch --show-current | head -n 1)
  git push origin $currentBranch
  echo "😊 git push origin $currentBranch 😊"

  echo "😎 done! 😎"
  ;;

*)
  echo "Error : Unknown Command"
  usage
  exit 0
  ;;
esac
