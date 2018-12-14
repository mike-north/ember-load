module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,

  launch_in_ci: ['SL_Internet_Explorer_11_public'],

  launch_in_dev: ['SL_Internet_Explorer_11_public'],

  launchers: {
    SL_Internet_Explorer_11_public: {
      exe: 'ember',
      args: [
        'sauce:launch',
        '---',
        '-b',
        'internet explorer',
        '--visibility',
        'public',
        '--attach',
        '--no-connect',
        '--url'
      ],
      protocol: 'browser'
    }
  }
};
