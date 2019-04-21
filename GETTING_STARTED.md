Project created with `npx create-react-app tweet-hub-web`

# Initial Setup
- add a `.env` file with `NODE_PATH=src` so that you can import with absolute path

# First Page
- create `containers/HomePage/index.js`

# State Management with Redux
- `npm install --save redux react-redux`
- create `configureStore`
- add `reducer.js`, `actions.js`, `constants.js`
- add `mapStateToProps` and `connect()`

# Use Immutable
- `npm install --save immutable redux-immutable`
- in reducers import immutable and use `state.set()`
- in configureStore import combineReducers from redux-immutable and use `fromJS()`

# Effects with Saga
- `npm install --save redux-saga`
- add `applyMiddleware` and use `compose`
- add `saga.js`

# Using Selectors
- `npm install --save reselect`
- add `selectors.js`

# Add Styling
- `npm install --save styled-components`
- create a component using ```styled.ul```

# Add Routing
-
