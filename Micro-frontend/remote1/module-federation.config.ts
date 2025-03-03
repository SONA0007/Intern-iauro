export const mfConfig = {
  name: "remote1",
  filename: "remoteEntry.js",
  exposes: {
    "./RemoteButton": "./src/RemoteButton",
    "./Header": "./src/Header",
  },
  shared: ["react", "react-dom"],
};




