# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-go to https://sketchfab.com/
-choose a 3d model
-download it's gltf file
-extract all in a new folder on desktop
-open cmd go to its path
-gltf-pipeline -i scene.gltf -o walk.gltf -d
-npx gltfjsx walk.gltf --transform
-import glb, gltf files into public, 
jsx files into components