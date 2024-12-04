@echo off

call ignore.bat

if "%completed%" == "false" (
    echo paste in your discord token
    set /p token=
    echo paste in the discord channel id you would like to use (must be a server with the bot invited)
    set /p channel=
    echo setting up..

    echo token = "%token%";> config.js
    echo channelId = "%channel%";>> config.js
    echo.>> config.js
    echo module.exports = {>> config.js
    echo.  token: "%token%",>> config.js
    echo.  channelId: "%channel%" >> config.js
    echo };>> config.js

    echo set completed=true> ignore.bat
)

echo [1^| Run the bot] [2^| Run setup again] [3^| Exit]
set /p number=
if "%number%" == "1" (
    echo Running
    node run.js
) else if "%number%" == "2" (
    echo Resetting setup..
    echo set completed=false> ignore.bat
    call windowsStart.bat
) else if "%number%" == "3" (
    echo Exiting..
    exit /b 0
) else (
    echo Invalid number. Exiting..
    exit /b 0
)