# PandaScriptor

[PandaScriptor](https://hackernowful.github.io/PandaScriptor/) is an intuitive and powerful tool designed to convert Ducky Script into code compatible with various Arduino boards, including Pro Micro, Digispark, and ESP32 BLE HID. This tool simplifies the process of transforming your Ducky Script payloads into executable scripts for your preferred microcontroller, enabling seamless execution of keyboard and mouse emulation attacks.

## Features

- **Ducky Script to Arduino Conversion**: Effortlessly convert your Ducky Script into code for Pro Micro, Digispark, and ESP32 BLE HID.
- **Multiple Board Support**: Generate scripts tailored to the capabilities and syntax of different microcontrollers.
- **User-Friendly Interface**: A clean and intuitive web interface that simplifies the conversion process.
- **Open Source**: The source code is available for community contributions and improvements.

## Supported Boards

- **Pro Micro**: Utilize the power of the Pro Micro board for executing complex scripts.
- **Digispark**: Leverage the compact and cost-effective Digispark board for your payloads.
- **ESP32 BLE HID**: Enable BLE HID functionalities on your ESP32 for wireless execution of scripts.

## Getting Started

### Prerequisites

- A computer with an internet connection.
- An Arduino-compatible microcontroller (Pro Micro, Digispark, or ESP32 BLE HID).
- Basic understanding of Ducky Script and Arduino programming.

### Conversion Steps

1. **Access the PandaScriptor Website**: Navigate to [PandaScriptor](https://hackernowful.github.io/PandaScriptor/).
2. **Input Your Ducky Script**: Copy and paste your Ducky Script into the provided input field.
3. **Select Target Board**: Choose your target microcontroller from the available options (Pro Micro, Digispark, ESP32 BLE HID).
4. **Convert Script**: Click the "Convert" button to generate the corresponding Arduino code.
5. **Download and Upload**: Download the generated code and upload it to your microcontroller using the Arduino IDE or your preferred tool.

## Example

### Ducky Script
```text
REM This is a simple Ducky Script example
DELAY 500
STRING Hello, World!
ENTER
```

## Converted Code for Pro Micro
```cpp
#include <Keyboard.h>

void setup() {
  // Initialize Keyboard
  Keyboard.begin();
  delay(500);
  // Type 'Hello, World!'
  Keyboard.print("Hello, World!");
  Keyboard.write(KEY_RETURN);
Keyboard.releaseAll();
}

void loop() {
  // Empty loop
}

```
## Contributing

PandaScriptor is an open-source project and welcomes contributions. If you have any improvements, suggestions, or bug fixes, feel free to create an issue or submit a pull request on the GitHub repository.

## Reporting Issues

If you encounter any issues or have questions, please use the GitHub issue tracker to report them. Provide as much detail as possible to help us diagnose and resolve the problem quickly.

## License

PandaScriptor is licensed under the MIT License. See the LICENSE file for more details.

## Author

Hacker Nowful

Hacker Nowful is a cybersecurity enthusiast and developer with a passion for creating innovative tools for the security community. With expertise in various programming languages and a deep understanding of security principles, Nowful contributes to open-source projects aimed at enhancing security testing and education. For more information, visit his [GitHub profile](https://github.com/HackerNowful).

## Acknowledgments

Special thanks to the open-source community and contributors who have helped in the development and improvement of PandaScriptor. Your support and contributions are greatly appreciated.

Start converting your Ducky Scripts effortlessly with PandaScriptor and take full advantage of your Arduino boards' capabilities!

Visit [PandaScriptor](https://hackernowful.github.io/PandaScriptor/) to get started.

<br>
#ducky #duckyscriptconverter #duckylib #PandaScriptor #pandapod #hackernowful #samykamkar

