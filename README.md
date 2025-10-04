# 🌍 LoRi - LoRa Based Emergency Communication System

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![YouTube Demo](https://img.shields.io/badge/YouTube-Demo-red.svg)](https://youtu.be/GhQmxzeg5oc)

LoRi is an innovative Emergency Communication System (ECS) that leverages LoRa technology to provide reliable, long-range communication during disaster scenarios when traditional communication infrastructure is unavailable.

## 📡 What is LoRa?

LoRa (Long Range) is a spread spectrum modulation technique derived from chirp spread spectrum (CSS) technology. Developed by Semtech, it's a long-range, low-power wireless platform that has become the de facto standard for Internet of Things (IoT) networks worldwide.

### Key Features of LoRa:
- Long-range communication (up to 15 km in rural areas)
- Low power consumption (battery life of several years)
- Strong signal penetration through obstacles
- Secure data transmission
- License-free sub-GHz frequency bands

## 🚨 The Problem

During emergencies and natural disasters, traditional communication networks often fail due to infrastructure damage or network congestion. Existing emergency communication solutions face limitations:

- **Cellular Networks**: Often overloaded or damaged during disasters
- **Wi-Fi/Bluetooth**: Limited range (typically <100m)
- **Satellite Phones**: Expensive and not widely available
- **Walkie-Talkies**: Limited range and require direct line of sight

## 💡 Our Solution: LoRi

LoRi is an infrastructure-independent emergency communication system that enables:

- **Long-range communication** using LoRa technology
- **Multi-hop networking** to extend coverage
- **Voice activation** for emergency alerts
- **Real-time location tracking** of distress signals
- **Web-based dashboard** for monitoring and management

## 🛠️ System Architecture

### 1. Hardware Components
- **LoRa Nodes**: Arduino-based devices with LoRa modules
- **Gateway**: Central LoRa receiver connected to the internet
- **Sensors**: GPS for location tracking, microphone for voice activation

### 2. Software Components
- **Node.js Backend**: Handles data processing and storage
- **MongoDB Database**: Stores emergency alerts and location data
- **Web Interface**: Real-time monitoring dashboard with interactive map

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB Atlas account (or local MongoDB instance)
- Arduino IDE (for hardware programming)
- LoRa modules (e.g., RFM95/96)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johntharian/lori.git
   cd lori/Node
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/lori
   PORT=3000
   ```

4. **Start the server**
   ```bash
   node index.js
   ```

5. **Access the web interface**
   Open `http://localhost:3000` in your web browser

## 🎯 How It Works

1. **Emergency Alert**: User activates the emergency feature (voice command or button press)
2. **Location Transmission**: Device sends GPS coordinates via LoRa
3. **Multi-hop Relay**: Signal is relayed through nearby nodes to reach the gateway
4. **Data Processing**: Server processes the alert and updates the dashboard
5. **Response**: Emergency services can view the alert location on the map and respond

## 🗺️ Web Interface

The web dashboard provides:
- Real-time map view of active nodes
- Emergency alerts with location markers
- Node status monitoring
- Historical data and analytics

## 📱 Hardware Setup

### Required Components
- Arduino board (e.g., ESP32, Arduino MKR WAN 1300)
- LoRa module (e.g., RFM95/96)
- GPS module (e.g., NEO-6M)
- Microphone module (for voice activation)
- Power source (battery pack)

### Uploading the Firmware
1. Open `Arduino/LoRaSender/LoRaSender12345.ino` in Arduino IDE
2. Install required libraries:
   - LoRa.h
   - SPI.h
   - TinyGPS++.h
3. Select the correct board and port
4. Upload the sketch

## 🌐 API Endpoints

- `POST /post` - Submit emergency alert
- `GET /get` - Retrieve alert data
- `GET /nodes` - List all active nodes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- LoRa Alliance for the LoRaWAN® protocol
- Semtech for LoRa technology
- Open-source community for various libraries and tools

---

<div align="center">
  Made with ❤️ by the LoRi Team
</div>
