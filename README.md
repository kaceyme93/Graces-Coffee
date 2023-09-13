This full stack app boilerplate consists of:

- an Express web server,
- a PostgreSQL database instance,
- and a React front-end

You'll also find a bunch of convenient commands and workflows that will allow you to develop your app locally.

## Project Structure

```bash
├── .github/workflows
│   └── heroku-deploy.yaml
│  
├── api
│   ├── apiRouter.test.js
│   └── index.js
│
├── db
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   ├── client.js
│   ├── index.js
│   └── init_db.js
│
├── public
│   └── index.html
│
├── src
│   ├── axios-services
│   │   └── index.js
│   ├── components
│   │   ├── App.js
│   │   └── index.js
│   ├── style
│   │   ├── App.css
│   │   └── index.css
│   └── index.js
│
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

`/db` contains your `index.js` which exports the client instance and your database adapter models, as well as `init_db.js` which should be run when you need to rebuild your tables and seed data.

`/public` and `/src` are the two puzzle pieces for your React front-end. `/public` contains any static files necessary for your front-end. This can include images, a favicon, and most importantly the `index.html` that is the root of your React application.

`src/axios-services` contains your axios network request adapters. `src/components` contains your React component files.

Inside `/api` you have `index.js` which is responsible for building the `apiRouter` that you'll attach in the express server, and `apiRouter.test.js` which will give you direction on test-driven development for your api. Your React application and Express server use any routes you build in the `/api` directory to send/receive data via JSON, for example, a `usersRouter.js` that will be required and mounted in the `apiRouter.js`.

Rounding things out, we've got the top level `index.js` that creates your Express Server. This should be responsible for setting up your API, starting your server, and connecting to your database. We've also got our `.gitignore`, `package-lock.json`, and `package.json` where you'll find the scripts necessary to get your app off the ground, as well as this `README.md`.

## Command Line Tools

In addition to `start:dev`, `client:build`, `client:dev` and `server:dev`, you have access to `db:build` which rebuilds the database, all the tables, and ensures that there is meaningful data present.

# Deployment


## Deployment

In `.github/workflows` you'll find a YAML, an acronym for "YAML Ain't Markup Language", that triggers an automated deployment by watching your `main` branch: whenever a new pull request is merged to `main`, your app will automagically deploy itself on heroku.

Optionally, you can also trigger this deployment workflow by pushing to the `deploy` branch. Many companies use this pattern to enable hotfixes without going through the lengthy review process of creating a PR and merging it.

Note that this workflow does **not** seed your database. To seed your remote postgres instance, run the following command:

```bash
# this command seeds your remote postgres instance
$ heroku run npm run db:build
```

As you project grows you'll probably want to re-seed and refresh your database from time to time. Rerun this command whenever you want to re-seed.

# Wrapup

You'll be able to view your fullstack application by running `heroku open`. Bask in the glory of your live site, and happy coding!
