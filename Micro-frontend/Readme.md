# Microfrontend Project with Module Federation

## 📌 Overview
This repository demonstrates a **Microfrontend Architecture** using **Module Federation** with **Rspack**. The project consists of three microfrontend (MF) applications:
- **Host** (Container App)
- **Remote1** (Provides components like `RemoteButton` and `Header`)
- **Remote2** (Additional remote module)

The main goal is to enable seamless **sharing of components** across different microfrontends, improving scalability and modularity.

## 🚀 Technologies Used
- **React 19**
- **TypeScript**
- **Rspack** (Fast Webpack alternative)
- **Module Federation Plugin** (via `@module-federation/enhanced`)
- **Lazy Loading & Suspense**
- **Custom Type Declarations**
- **CSS & PostCSS**

## ⚡ Challenges Faced
1. **TypeScript Errors with Module Federation**  
   - `#TYPE-001` errors occurred while generating TypeScript declarations for remote modules.
   - Solution: Created `remote1.d.ts` to declare modules manually.
   - - Example Fix:
     ```ts
     declare module "remote1/Header" {
       const Header: React.ComponentType;
       export default Header;
     }
     ```
   
2. **Importing JSX Components in TSX Files**  
   - Issue: `Header.jsx` from `remote1` was difficult to import in `App.tsx`.
   - Solution: Used **React.lazy & Suspense** for dynamic imports.

3. **Rspack Configuration Issues**  
   - Missing or incorrect `publicPath` and `uniqueName` caused errors.
   - Solution: Carefully structured `rspack.config.js` for each MF.

4. **Rspack Configuration Differences**
   - Unlike Webpack, **Rspack** does not use `webpack.config.js` but instead uses `rspack.config.js` with `defineConfig()`.
   - Some plugins work differently, and we had to adjust configurations.

5. **Dev Server Build Failures**  
   - Errors like `ENOENT: no such file or directory, open 'dist/@mf-types.zip'`.
   - Solution: Ensured proper paths and dependencies for Module Federation Dev Server.
   -
6. **Lazy Loading & Suspense**
   - When importing remote components, React’s `lazy` and `Suspense` were required to handle async loading.
   - Example:
     ```tsx
     const RemoteHeader = React.lazy(
       () => import("remote1/Header") as Promise<{ default: React.ComponentType }>
     );
     ```

## How Rspack is Different from Webpack

| Feature        | Webpack | Rspack |
|---------------|---------|--------|
| **Performance** | Slower due to JavaScript-based execution | Faster, written in Rust |
| **Configuration** | Uses `webpack.config.js` | Uses `rspack.config.js` |
| **Build Speed** | Slower in large projects | Significantly faster |
| **Plugin Compatibility** | Large ecosystem | Limited but growing |
| **HMR (Hot Module Replacement)** | Good | Faster HMR |
| **Tree Shaking** | Optimized | More efficient |

### Why Use Rspack?
- **Performance Boost**: Rust-based compilation speeds up the process.
- **Better Dev Experience**: Faster **HMR** (Hot Module Replacement).
- **Drop-in Webpack Alternative**: Uses similar configurations but optimized for speed.


## How to Run This Project

1. Install dependencies for each MF app:
   ```sh
   cd host && npm install
   cd ../remote1 && npm install
   cd ../remote2 && npm install
   ```

2. Start the applications:
   ```sh
   cd remote1 && npm run dev
   cd ../remote2 && npm run dev
   cd ../host && npm run dev
   ```

3. Open the **Host** app in the browser:
   ```
   http://localhost:8080/
   ```
   The Host will load federated components from `remote1` and `remote2` dynamically.


## 🎯 Key Learnings
- **Microfrontend Architecture**: Learned how to modularize frontend apps efficiently.
- **Rspack vs Webpack**: Explored **Rspack’s** faster builds and advantages over Webpack.
- **Dynamic Imports with Lazy & Suspense**: Improved code splitting and optimized loading.
- **Handling TypeScript in Module Federation**: Managed type declarations for remote modules.
- **Optimized Build Configurations**: Understood how **Rspack** optimizes output and minimizes assets.

## 🛠️ How This Project Moulded My Thinking
This project reshaped my approach to frontend development by making me think about:
- **Modularity**: Structuring applications to be more scalable and maintainable.
- **Performance Optimization**: Using **lazy loading**, **minimization techniques**, and **Rspack** for faster builds.
- **Type Safety in Microfrontends**: How TypeScript interacts with dynamically imported federated modules.
- **Cross-App Communication**: Sharing state and components efficiently across multiple MF apps.
- **Microfrontends improve scalability**: Instead of monolithic applications, breaking the UI into smaller independent pieces makes development and maintenance easier.
- **Bundler choice matters**: Rspack is much faster than Webpack, reducing build times and improving productivity.
- **Thinking in modular components**: Each remote can be independently developed and deployed, enabling true **independent scaling**.
- **Importance of TypeScript support**: Working with microfrontends in TypeScript requires additional type declarations.

## 💡 Next Steps
- **Enhance State Management**: Explore using Redux/Context API for shared state.
- **Testing Microfrontends**: Implement Jest/React Testing Library for each MF.
- **Deploying Microfrontends**: Experiment with hosting federated modules separately.

---
## Sample 
![image](https://github.com/user-attachments/assets/920df831-46c1-4111-8b5a-3f38852b7b30)

