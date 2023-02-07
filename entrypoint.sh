#!/bin/sh
rm /tmp/.X99-lock || true

Xvfb :99 -ac -screen 0 600x800x16 -listen tcp &
x11vnc -forever -noxdamage -display :99 -nopw -loop -xkb &

rm -rf /data/userdata/*/Singleton* || true

# NODE_ENV が production の場合は node index.js
# それ以外の場合は yarn start
if [ "$NODE_ENV" = "production" ]; then
  node index.js
else
  yarn start
fi

kill -9 "$(pgrep -f "Xvfb" | awk '{print $2}')"
kill -9 "$(pgrep -f "x11vnc" | awk '{print $2}')"