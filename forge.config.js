module.exports = {
  packagerConfig: {
    asar: true,
    version: "0.2.0",
    icon: "./public/favicon.ico",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "placar-jiujitsu",
        setupIcon: "./public/favicon.ico",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      options: {
        icon: "./public/logo192.png",
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "./public/logo512.png",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        icon: "./public/logo512.png",
      },
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  
  ],
};
