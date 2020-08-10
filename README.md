# Hardocs Client integrating Gridsome and Electron.

> Note: This project has only being tested on a linux machine and it's working perfectly. This is open source so feel free to contribute. :)

## Prerequisites:

- Electron 8+ - install globally with `npm i -g electron@latest`
- Gridsome - install `npm install --global @gridsome/cli`
- Typescript (Optional) - install globally with `npm i -g typescript`

## Quick start
If you have the Gridsome CLI installed, simply run:
```bash
gridsome create <YOUR_PROJECT_NAME> https://github.com/DNature/gridsome-electron-boilerplate
```
After creating your project, skip to the second step and continue till the end.

If you done have Gridsome CLI then follow these steps.

1. Clone the project:

```bash
git clone https://github.com/DNature/gridsome-electron-boilerplate.git <YOUR_PROJECT_NAME>

# if <YOUR_PROJECT_NAME> is not specified then it defaults to gridsome-electron-boilerplate
```

2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>.`

3. Run `yarn` or `npm install` to install all the necessary dependencies.

4. Run `npm run grant` or `yarn grant` to make `startServer.sh` executable.

5. Run `yarn start` or `npm run start` to start the server.

6. enter your environment.

- `prod` or `production` for production environment.
- `dev` or `development` for development environment.

Now you're ready to rumble! 🤓 
