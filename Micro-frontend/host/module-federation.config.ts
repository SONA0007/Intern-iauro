export const mfConfig = {
  name: "host",
  exposes: {
  },
  remotes:{
    remote1 : "remote1@http://localhost:8081/remoteEntry.js"
  },
  shared: ["react", "react-dom"],
};
