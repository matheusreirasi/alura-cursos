This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# First steps
Just run `npm install` and after installing all dependencies run `npm start` to run it in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## About the project
* Files and components imported were made using absolute imports that I configured at tsconfig and the root path is src.
* For some reason normalize from create-react-app is not working. I installed normalize.css to reset CSS.
* There is a search bar and a type button to get dishes by name or type.
* Turn back button with useNavigate
* The course react-router-dom extends this project.
* From react-router-dom course it's used eslint to analyze code. To use it run on terminal `npm init @eslint/config` and answer some questions. Program will be in use just after installation, it works with tsx filetype but it didn't works with scss filetype. To adjust everything that don't match eslint configs run on terminal `npx eslint ./src --fix` to fix all files inside src folder. The default config after installation still give errors about 'React' must be in scope when using JSX, to fix it just put in eslint config file "react/react-in-jsx-scope": "off" and "react/jsx-uses-react": "off" inside rules key.

### OBS:
For some reason the app is not working on localhost after a crash on Firefox. Console return `SyntaxError: illegal character U+FFFD` error. 