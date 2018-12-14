module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,

  launch_in_ci: [
    'Chrome'
  ],

  launch_in_dev: [
    'Chrome'
  ],

  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--headless',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
      ].filter(Boolean)
    }
  },

  launchers: {
    SL_Internet_Explorer_11_public: {
      "exe": "ember",
      "args": [
        "sauce:launch",
        "-b",
        "Internet Explorer 11",
        "--visibility",
        "public",
        "--attach",
        "--no-connect",
        "--url"
      ],
      "protocol": "browser"
    }
  }
};
