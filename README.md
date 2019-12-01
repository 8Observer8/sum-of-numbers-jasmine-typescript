Playground:

> https://next.plnkr.co/edit/VNDDXLBIKVtzPNmv?preview

For local build:

> Install TypeScript globally: npm typescript -g

> npm i

> Install Browserify and UglifyJS globally for release mode: npm i broserify uglify-js -g

How to build a client localy for debug mode:

> npm run build-debug-client

> Run a local web server. For example: http-server

> Open in a browser: localhost:8080/index.html

How to build a client localy for release mode:

> Comment/Uncomment the "Debug/Release" modes in the files: public/index.html, src/Program.ts

> npm run build-release-client

> Open in a browser: localhost:8080/index.html

How to build unit tests localy for debug mode:

> npm run build-debug-specs

> Run a local web server. For example: http-server

> Click the "Run Unit Tests" button. Or open in a browser: localhost:8080/specs/SpecRunner.html

How to build unit tests localy for release mode:

> Comment/Uncomment the "Debug/Release" modes in the file: public/specs/SpecRunner.html

> npm run build-release-client

> Click the "Run Unit Tests" button. Or open in a browser: localhost:8080/specs/SpecRunner.html
