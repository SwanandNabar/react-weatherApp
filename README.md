# Weather App

This app is created using React with webpack and babel to render weather for any given location entered
It uses a free service called OpenWeatherMap Api to render the weather

# Documentation

Babel-core         : transforms ES6 code to ES5 for some non compatible browsers
Babel-loader       : Webpack helper to transform javascript dependencies
babel-preset-env   : Determines which env to use depending on browser
babel-preset-react : Babel preset for all React plugins.

# GitHub Cards

Github cards lets a user to call the GitHub v3 API to get a list of top 100 starred GitHub repositories.

Two features: 

Feature 1:
    GET https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=100
    The first URL allows the user to get a list of top 100 starred repositores from GitHub API from which we get the name of the 
    repository along with the name of the owner of the repository. 
    We also get the URL for the repository and the star count on each repository. 

Feature 2:
    GET https://api.github.com/repos/:owner/:repo/commits
    The second URL allows the user to get the list of commits made in the last 24 hours to those specific repositories.
    We get the name of the person who made the commit along with the time of the commit and the commit message.

    The second URL is contructed based on the data returned by the first URL.
    To construct the second URL to get list of commits we pass three query parameters from the list of the first URL which are:
        a. The Login Name
        b. The Name of the repository
        c. The dateTime calculated and constructed for the last 24 hours at any given time
