#!/bin/sh
rm /tmp/.X*-lock || true

# Xvfb :0 -ac -screen 0 600x800x16 -listen tcp &
x11vnc -rfbport 5900 -forever -noxdamage -display :0 -nopw -loop -xkb 1>/dev/null 2>&1 &

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