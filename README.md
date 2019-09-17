[Maze](https://maze.design)'s Serverless Starter Kit adds a light layer on top of the Serverless framework, giving you the latest in modern JavaScript (ES6 via Webpack + Babel, TypeScript if you want it, testing with Jest, linting with ESLint, and formatting with Prettier), the ease and power of Serverless, and a few handy helpers (like functions for handling warm functions and response helpers).

Once installed, you can create and deploy functions with the latest ES6 features in minutes, with linting and formatting baked in.

## Install

```bash
# If you don't already have the serverless cli installed, do that
yarn global add serverless

# Use the serverless cli to install this repo
serverless install --url https://github.com/mazedesignhq/maze-serverless-starter --name <your-service-name>

# cd into project and set it up
cd <your-service-name>

# Install dependencies
yarn install
```

## Development

Creating and deploying a new function takes two steps, which you can see in action with this repo's default Hello World function (if you're already familiar with Serverless, you're probably familiar with these steps).

#### 1. Add your function to `serverless.yml`

In the functions section of [`./serverless.yml`](./serverless.yml), you have to add your new function like so:

```yaml
functions:
  helloWorld:
    handler: src/handlers.helloWorld
    events:
      - http:
          path: hello
          method: get
```

#### 2. Create your function

This starter kit's Hello World function (which you will of course get rid of) can be found at [`./src/hello.js`](./src/hello.js). There you can see a basic function that's intended to work in conjunction with API Gateway (i.e., it is web-accessible). Like most Serverless functions, the `hello` function accepts an event, context, and callback. When your function is completed, you execute the callback with your response. (This is all basic Serverless; if you've never used it, be sure to read through [their docs](https://serverless.com/framework/docs/).

---

You can develop and test your lambda functions locally in a few different ways.

### Live-reloading functions

To run the hello function with the event data defined in [`fixtures/event.json`](fixtures/event.json) (with live reloading), run:

```bash
yarn watch:hello
```

### API Gateway-like local dev server

To spin up a local dev server that will more closely match the API Gateway endpoint/experience:

```bash
yarn serve
```

### Test your functions with Jest

Jest is installed as the testrunner. To create a test, co-locate your test with the file it's testing
as `<filename>.test.js` and then run/watch tests with:

```bash
yarn test
```

### Adding new functions/files to Webpack

When you add a new function to your serverless config, you don't need to also add it as a new entry
for Webpack. The `serverless-webpack` plugin allows us to follow a simple convention in our `serverless.yml`
file which is uses to automatically resolve your function handlers to the appropriate file:

```yaml
functions:
  hello:
    handler: src/handler.namedExport
```

As you can see, the path to the file with the function has to explicitly say where the handler
file is. (If your function weren't the default export of that file, you'd do something like:
`src/hello.namedExport` instead.)

## Environment Variables

If you have environment variables stored in a `.env` file, you can reference them inside your `serverless.yml` and inside your functions. Considering you have a `NAME` variable:

In a function:

```node
process.env.NAME;
```

In `serverless.yml`:

```yaml
provider:
  name: ${env:NAME}
  runtime: nodejs6.10
```

You can check the documentation [here](https://www.npmjs.com/package/serverless-dotenv-plugin).

## Deploy

Assuming you've already set up your default AWS credentials (or have set a different AWS profile via [the profile field](serverless.yml#L25)):

```bash
yarn deploy
```

`yarn deploy` will deploy to "dev" environment. You can deploy to `stage` or `production`
with:

```bash
yarn deploy:stage

# -- or --
# That should only by used by CI
yarn deploy:production
```

After you've deployed, the output of the deploy script will give you the API endpoint
for your deployed function(s), so you should be able to test the deployed API via that URL.

---

Happy coding!
