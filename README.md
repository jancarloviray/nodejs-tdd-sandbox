TDD Sandbox
===========

Sandbox for quick TDD practice. Easy. Quick. Painless. Uses Mocha, Chai, Sinon and Testem

Put your source files in `src/`. Test files should go to `test/`.

If you use *testem*, all files will be added globally and there is no need to do a `require`. In fact, using `require` will throw an exception.

If you would like to test with mocha, you will need to `require` all depenencies. At this point, Mocha here is not setup to do DOM-available testing. If you would like to test DOM, client-side scripts use `source start_testem.sh` or `npm test`

launching the tests
-------------------

**DEFAULT** `npm test`

**CLIENT** `source test_client.sh`

**SERVER** `source test_server.sh`

By [Jan Carlo Viray](http://www.jancarloviray.com)