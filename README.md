[![Coverage Status](https://coveralls.io/repos/github/0x464e/comp-se-200/badge.svg?branch=main)](https://coveralls.io/github/0x464e/comp-se-200?branch=main)
# Tested functions
Here is a list of the functions we chose for testing:
- add.js
- ceil.js
- defaultTo.js
- divide.js
- eq.js
- filter.js
- isLength.js
- map.js
- toInteger.js
- toString.js
# Contents of this repository
We are using Jest test folder structure so our tests can be found under `__tests__` folder with names of `function.test.js`.

# Installation guide
To reproduce and run tests on your own local machine, here is a list to follow:

First you should install [Node.JS](https://nodejs.org/en/).
We are ensuring with our testing pipeline that these tests work with versions 14, 16 and 18.

Then follow these steps:

1. Clone/download this repository
2. run `npm install`

Run only tests
`npm test`

Run tests with coverage report
`npm test-cov`

The coverage report will be found from the `/coverage` folder.  
If you open the `coverage/index.html` you will find a collection from all the tests and their coverages.
# Technologies
Tests are created with [Jest framework](https://jestjs.io/). Here is the [documentation](https://jestjs.io/docs/getting-started) for this framework.

Pipeline is created with [GitHub Actions](https://docs.github.com/en/actions) and coverage report is posted with [Coveralls](https://docs.coveralls.io/)
