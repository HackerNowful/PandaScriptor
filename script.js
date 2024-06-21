        var ducky2digi = {
    "WINDOWS": "KEY_LEFT_GUI",
    "CTRL": "KEY_LEFT_CTRL",
    "ALT": "KEY_LEFT_ALT",
    "SHIFT": "KEY_LEFT_SHIFT",
    "GUI": "KEY_LEFT_GUI",
    "UPARROW": "KEY_UP_ARROW",
    "DOWNARROW": "KEY_DOWN_ARROW",
    "LEFTARROW": "KEY_LEFT_ARROW",
    "RIGHTARROW": "KEY_RIGHT_ARROW",
        "r": "KEY_R",
    // Add more key mappings as needed
};
function convert() {
    var platform = document.getElementById('platformSelect').value;
    var duckyScript = document.getElementById('inputBox').value;
    var keyboardScript = "";

    keyboardScript += "// Author  = Hacker Nowful  \n\n";
    keyboardScript += "// Insta   = https://www.instagram.com/mr_white_hat._ \n\n";
    keyboardScript += "// GitHub  = https://github.com/HackerNowful \n\n";
    keyboardScript += "// Website = www.hypesecinfotech.com \n\n";
    keyboardScript += "// Happy Hacking!😁😊 \n\n";

    
    
    // Include library based on selected platform
    if (platform === "arduino") {
        keyboardScript += "#include <Keyboard.h>\n\n";
            keyboardScript += "void setup() {\n";
    keyboardScript += "\tKeyboard.begin();\n";
    keyboardScript += "}\n\n";

    keyboardScript += "void loop() {\n";

    duckyScript = duckyScript.split(/\r\n|\r|\n/g);

    for (var line = 0; line < duckyScript.length; line++) {
        if (duckyScript[line].slice(0, 3) == "REM") {
            keyboardScript += "//" + duckyScript[line].slice(3) + "\n";
        } else if (duckyScript[line].slice(0, 5) == "DELAY") {
            keyboardScript += "delay(" + parseInt(duckyScript[line].slice(6)) + ");\n";
        } else if (duckyScript[line].slice(0, 6) == "STRING") {
            keyboardScript += "Keyboard.print(\"" + duckyScript[line].slice(7) + "\");\n";
        } else {
            var keys = duckyScript[line].split(" ");
            for (var j = 0; j < keys.length; j++) {
                if (keys[j] in ducky2digi) {
                    keyboardScript += "Keyboard.press(" + ducky2digi[keys[j]] + ");\n";
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release the key immediately after pressing
                } else if (keys[j] === "ENTER") {
                    keyboardScript += "Keyboard.press(KEY_RETURN);\n"; // Press ENTER
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release ENTER
                }
            }
        }
    }

    keyboardScript += "}\n";
    } else if (platform === "digispark") {
        keyboardScript += "#include <DigiKeyboard.h>\n\n";
        keyboardScript += "DigiKeyboard Keyboard;\n\n";
            keyboardScript += "void setup() {\n";
    keyboardScript += "\tKeyboard.begin();\n";
    keyboardScript += "}\n\n";

    keyboardScript += "void loop() {\n";

    duckyScript = duckyScript.split(/\r\n|\r|\n/g);

    for (var line = 0; line < duckyScript.length; line++) {
        if (duckyScript[line].slice(0, 3) == "REM") {
            keyboardScript += "//" + duckyScript[line].slice(3) + "\n";
        } else if (duckyScript[line].slice(0, 5) == "DELAY") {
            keyboardScript += "delay(" + parseInt(duckyScript[line].slice(6)) + ");\n";
        } else if (duckyScript[line].slice(0, 6) == "STRING") {
            keyboardScript += "Keyboard.print(\"" + duckyScript[line].slice(7) + "\");\n";
        } else {
            var keys = duckyScript[line].split(" ");
            for (var j = 0; j < keys.length; j++) {
                if (keys[j] in ducky2digi) {
                    keyboardScript += "Keyboard.press(" + ducky2digi[keys[j]] + ");\n";
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release the key immediately after pressing
                } else if (keys[j] === "ENTER") {
                    keyboardScript += "Keyboard.press(KEY_RETURN);\n"; // Press ENTER
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release ENTER
                }
            }
        }
    }

    keyboardScript += "}\n";
    } else if (platform === "esp32") {
        keyboardScript += "#include <BleKeyboard.h>\n\n";
        keyboardScript += "BleKeyboard Keyboard;\n\n";
        
            keyboardScript += "void setup() {\n";
    keyboardScript += "\tKeyboard.begin();\n";
    keyboardScript += "}\n\n";

    keyboardScript += "void loop() {\n";
    keyboardScript += "if(Keyboard.isConnected()) {\n";
    
    duckyScript = duckyScript.split(/\r\n|\r|\n/g);

    for (var line = 0; line < duckyScript.length; line++) {
        if (duckyScript[line].slice(0, 3) == "REM") {
            keyboardScript += "//" + duckyScript[line].slice(3) + "\n";
        } else if (duckyScript[line].slice(0, 5) == "DELAY") {
            keyboardScript += "delay(" + parseInt(duckyScript[line].slice(6)) + ");\n";
        } else if (duckyScript[line].slice(0, 6) == "STRING") {
            keyboardScript += "Keyboard.print(\"" + duckyScript[line].slice(7) + "\");\n";
        } else {
            var keys = duckyScript[line].split(" ");
            for (var j = 0; j < keys.length; j++) {
                if (keys[j] in ducky2digi) {
                    keyboardScript += "Keyboard.press(" + ducky2digi[keys[j]] + ");\n";
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release the key immediately after pressing
                } else if (keys[j] === "ENTER") {
                    keyboardScript += "Keyboard.press(KEY_RETURN);\n"; // Press ENTER
                    keyboardScript += "Keyboard.releaseAll();\n"; // Release ENTER
                }
            }
        }
    }
    keyboardScript += "}\n";
    keyboardScript += "}\n";
    }
    
    document.getElementById('outputBox').value = keyboardScript;
}
