#!/bin/bash

source ./ignore.sh

if [ "$completed" = "false" ] ; then
    echo "paste in your discord token"
    read token
    echo "paste in the discord channel id you would like to use (must be a server with the bot invited)"
    read channel
    echo "setting up.."

    echo "token = \"$token\";" > config.js
    echo "channelId = \"$channel\";" >> config.js
    echo "" >> config.js
    echo "module.exports = {" >> config.js
    echo "  token: token," >> config.js
    echo "  channelId: channelId," >> config.js
    echo "};" >> config.js

    echo "completed='true'" > ignore.sh
fi

echo "[1| Run the bot] [2| Run setup again] [3| Exit]"
read number
case $number in
1)
    echo "Running"
    node run.js
    ;;
2)
    echo "Resetting setup.."
    echo "completed='false'" > ignore.sh
    source ./start.sh
    ;;
3)
    echo "Exiting.."
    exit 0
    ;;
*)
echo "Invalid number. Exiting.."
    exit 0
    ;;
esac
