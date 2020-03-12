#!/bin/bash
cd react_frontend
out=$(npm run build 2>&1)
printf "%s" "$out"
if [[ $out =~ "ERR!" ]]; then
    printf "\n\n\n%s\n" "*****  FOUND ERROR  ******"
else
    printf "\n\n\n%s\n" "*****  RUNNING FLASK  ******"
    cd ../flask_backend
    #flask run
    gunicorn --bind 0.0.0.0:5000 wsgi:app
fi
