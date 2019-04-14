# 🔥🔥 react-ts-sc boilerplate 🔥🔥
This contains enough to get a project up and running with ease, also contains hot loading for [react](https://github.com/facebook/react). 

## Webpack
If you want to load css, scss etc. you'll need to add the appropriate resolvers yourself, I mainly use [styled-components](https://www.styled-components.com/) now so I haven't added anything but an image resolver. 

## State management 
I'm personally using [Redux](https://github.com/reduxjs/redux) at the moment, so I might add some basic boilerplate for that since it would save time, don't use [MobX](https://github.com/mobxjs/mobx) that much so probably wont do anything with that.

## Unit testing
Will add in the near future, along with husky to run tests pre commit or something like that.

## Routing 
If you need a routing package I recommend [Reach Router](https://github.com/reach/router), but for my project needs it does not contain enough of the features I would like, so I am currently building my own.

## Styled Components
I might move over my styled-components lib to fix some of the imports, since they're a bit wacky with the type definitions.

## Setup

```
yarn install
```
or
```
npm install
```

## Scripts
To start the dev server:
```
yarn start:dev
``` 
To build the project:
```
yarn build 
``` 
to lint: 
```
yarn lint
``` 

