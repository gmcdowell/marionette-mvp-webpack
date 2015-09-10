# MarionetteJS Minimal Viable Project
A boilerplate for developing [MarionetteJS](http://http://marionettejs.com/) Single Page Applications leveraging
[Webpack](http://webpack.github.io/), [Bootstrap](http://getbootstrap.com), [Handlerbars](http://handlebarsjs.com/)
& [Node express](http://expressjs.com/)

##A special thanks goes to:
- Christian Alfoni for his article: [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup).
- Justin Gordon for his plugin: [Bootstrap-Sass-Loader](https://github.com/justin808/bootstrap-sass-loader)
- James Kyle for his starter kit: [Marionette-Wires](https://github.com/thejameskyle/marionette-wires)

### Setup

    git clone git@github.com:gmcdowell/marionette-mvp-webpack.git
    
    npm install
    
    npm start   -> starts webpack dev server & express & watches for changes
    
    open http://localhost:3000 -> open in new terminal tab/window OR your browser
    
### Structure

    public/   -> index.html 
    server/   -> webpack dev server config
    src/      -> application files JS(es6), HTML, SASS
        /application/   -> marionette application (parent `App`)
        /apps/          -> marionette sub applications (children)
        /sass/          -> SASS style rules (Bootstrap)
        /services/      -> marionette specialized sub applications (non routing)
        /behaviors/     -> marionette behaviors used across `App`
        main.js         -> entry script & `App` initialization
        plugins.js      -> setup Backbone & Marionette and hook Browser Inspectors if present        
    server.js                       -> express server configuration
    webpack.config.js               -> webpack configuration (development)
    webpack.production.config.js    -> webpack configuration (production)
    
### Objective
To put together something that works for me ;)

### Technologies
- JS  -> ES6
- AMD -> Webpack
- CSS -> Bootstrap-Sass
- SPA -> Marionette & Backbone

