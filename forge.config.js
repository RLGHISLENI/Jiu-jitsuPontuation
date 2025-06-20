module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./public/logo.png", // será logo.ico, logo.icns ou logo.png dependendo do SO
    version: "1.1.0",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "placar-jiujitsu",
        iconUrl: "https://example.com/path/to/logo.png",
        setupIcon: "./public/logo.png",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
      options: {
        icon: "./public/logo.icns",
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
