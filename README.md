TDD Sandbox
===========

How to launch the tests?
-----------------------

**CLIENT** `source test_client.sh`

**SERVER** `source test_server.sh`

Introduction
------------

Sandbox for quick TDD practice. Easy. Quick. Painless. Uses Mocha, Chai, Sinon and Testem. *Samples have been included*

Put your source files in `src/`. Test files should go to `test/`.

If you use *testem*, all files will be added globally and there is no need to do a `require` for source files. In fact, using `require` will throw an exception (in the future, I will implement Browserify).

If you would like to test with mocha, you will need to `require` all depenencies. At this point, Mocha here is not setup to do DOM-available testing. If you would like to test DOM, so it's for testing server-side scripts.

Future Plans
------------
- Add more samples including mocks, stubs, etc
- Grunt integration
- implement Browserify
- ...


By [Jan Carlo Viray](http://www.jancarloviray.com)