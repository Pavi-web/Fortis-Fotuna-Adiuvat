# Fortis Fortuna Adiuvat
### **Fortis Fortuna Adiuvat** combines NASA’s space imagery with 3D Solar System simulations to create an immersive, hands-on space exploration experience.
The software offers two main interactive modes:
1. 🌌 **Deep-Zoom NASA Image Explorer** – A Google Maps–style viewer that allows users to pan and zoom across gigapixel space imagery, complete with annotations and educational overlays.  
2. ☀️ **3D Solar System Simulation** – A WebGL-powered environment where users can explore planets and orbits around the Sun.  

This dual design not only educates but also excites users by blending **science, technology, and storytelling**. By making cosmic data engaging, the project fosters curiosity and brings the wonders of the universe closer to everyone.##

# TEAM MEMBERS
1) Pavithra Madhusoodhanan
2) Sreehari S
3) Induchoodan VS
4) Sreedev S S
5) Harigovind P Nair

# Link to product walkthrough
https://1drv.ms/p/c/b299c4c6bae899e5/EXwGaQc5YT1GnAoXA_de3fsBJb9I0RwwblvHfV58ZxtSMQ?e=qpusjw

# OUTPUT
## Interactive User Interface ##
![Screenshot 2024-10-06 082737](https://github.com/user-attachments/assets/0f3dbfc8-9ffd-421b-ad43-65d17ef8bf50)

## 3-D Human Interactable JWST Model ##
![Screenshot 2024-10-06 082847](https://github.com/user-attachments/assets/0824fdb4-2bc9-4fe7-826f-57edd33fa64b)

## Many categories of images ##
![Screenshot 2024-10-06 082935](https://github.com/user-attachments/assets/cb07d8b3-a20e-4f0d-a042-0e51846de01c)

## JWST image slideshow with Mood based Music player ##
![Screenshot 2024-10-06 082948](https://github.com/user-attachments/assets/668dde9a-91c6-45fa-acce-266aa363bfb2)

## Interactive Quizes for user learning ##
![Screenshot 2024-10-06 082909](https://github.com/user-attachments/assets/9d84f5e0-7c7d-441e-8994-7d22a6f2bf7a)

## Interactive 3-D model of space with required details of each planet ##
![Screenshot 2024-10-06 083215](https://github.com/user-attachments/assets/3ac948f3-af26-4944-b955-4df2fa422eb4)

## Feedback form for future reference ##
![Screenshot 2024-10-06 090316](https://github.com/user-attachments/assets/185f2963-c3df-4538-92fa-a09daf833b6b)

# What exactly does it do?

Fortis Fortuna Adiuvat – Cosmic Explorer is an interactive web-based platform that allows users to explore space through two powerful experiences in one interface:

🪐 3D Solar System Simulation:

Built using Three.js, it visualizes the Sun, Earth, Mars, and Jupiter with realistic textures and orbits.

Users can zoom, rotate, and navigate through the solar system to understand planetary positions and motion.

It demonstrates how real-time, 3D cosmic navigation can make astronomy more engaging and intuitive.

🌌 High-Resolution NASA Image Explorer:

Uses NASA’s real imagery (e.g., Andromeda Galaxy or Moon surface) processed into deep-zoom tiles.

With OpenSeadragon, users can zoom in and pan across gigapixel-quality space images—similar to Google Maps but for galaxies.

Includes annotation and labeling features, allowing users to identify nebulae, clusters, or interesting regions.

🔗 Linking Both Worlds:

The system connects observational data (NASA images) with simulation data (3D models) to give users a complete view—from real telescope images to theoretical simulations.

Future versions can let users click on a galaxy in NASA imagery and instantly compare it with a simulated version from cosmological models (like the Illustris Project).

Overall, the project bridges science and visualization, turning raw NASA data into an interactive educational and research experience for anyone curious about space.

# How does it work?
1. Frontend Interface (React.js)

Developed using React with two main tabs:

Image Explorer

Simulation Explorer

Offers a clean, responsive, and easy-to-use design.

Allows seamless switching between 2D image exploration and 3D simulation navigation.

2. High-Resolution Image Explorer (OpenSeadragon)

NASA’s images are processed into tiled layers using Libvips.

OpenSeadragon dynamically loads and renders these tiles for smooth zoom and pan.

Users can explore gigapixel images, add annotations, and learn about specific regions.

A lightweight Node.js backend handles label storage and data serving.

3. 3D Simulation Explorer (Three.js)

Uses Three.js to render the Sun, Earth, Mars, and Jupiter with realistic orbital motion.

Includes interactive camera controls (zoom, pan, rotate).

Demonstrates planetary movement and spatial relationships visually.

4. Backend and Data Flow

Node.js API manages:

Annotation storage

Serving preprocessed image tiles

The backend is lightweight, ensuring fast performance during the demo.

5. Integration & Scalability

Both explorers are integrated under one React UI.

Can scale to:

Connect live to NASA APIs for real-time imagery.

Integrate AI to automatically detect or label celestial features.

Extend to cosmological simulations (Illustris API).

# What benefits does it have?

Enables immersive learning and exploration of the universe through interactive tools.

Combines real NASA imagery and 3D simulation to make space science more accessible.

Promotes STEM education by visualizing complex astronomical data in an engaging way.

Lays the foundation for future scientific tools that link observation (NASA data) and simulation (cosmic models).

Supports citizen science by allowing users to label and analyze celestial objects interactively.

# What do you hope to achieve?

To build a prototype demonstrating seamless exploration of NASA’s high-resolution space imagery and a simplified 3D solar system simulation.

To show how real observational data and simulated cosmic models can work together in a single user experience.

To highlight the potential of using AI and Web technologies for visualizing and interpreting space data at scale.

To inspire a vision where users can explore galaxies, label them, and compare real and simulated data interactively.

# What tools, coding languages, hardware, or software did you use to develop your project?

Frontend: React.js

3D Simulation: Three.js (WebGL-based Solar System Model)

Image Explorer: OpenSeadragon (deep-zoom viewer)

Image Processing: Libvips (for tiling NASA images into 256×256 tiles)

Backend: Node.js with minimal API for annotation storage

Design Tools: Figma / Canva (for UI-UX mockups)

Data Source: NASA Image and Video Library (Andromeda Galaxy, Mars, Moon datasets)

Deployment (optional): Vercel / Netlify

# NASA Data

Primary Sources:

NASA Andromeda Galaxy imagery

NASA Mars and Moon surface datasets

Used for:

Building deep-zoom demo tiles in OpenSeadragon

Creating visually accurate backdrops for the prototype

Purpose: Demonstrate scalable exploration of NASA’s gigapixel imagery.

# Space Agency Partner & Other Data

Future integration with ESA and Illustris Simulation API (for theoretical cosmic analogs).

These partnerships could enrich the experience with simulated universe datasets and multi-agency image archives.

# Use of Artificial Intelligence

AI is planned for future scaling, where it can:

Automatically label galaxies or features in NASA imagery.

Recommend related regions or simulations based on user exploration.

Use ML-based image recognition to classify celestial objects.






