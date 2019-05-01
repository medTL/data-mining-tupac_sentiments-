
## Description
Data mining project that analyse tupac lyrics sentiments 

## Requirements
Node.js & npm and R <br/>
R packages:<br/>
-dplyr <br/>
-tidytext<br/>
-purrr <br/>
-ggplot2 <br/>
-geniusr <br/>
-plumber <br/>

## Setup
1)install node.js with npm </br>
2)install R and it's packages </br>
3)Make and an account in genuis.com API and get the access token </br>
4)start the R server:</br>
to start the server run this commands in a terminal while you are in the R-server folder</br>
```
  R 
  library(geniusr)
  genius_token()
  //enter the access Token 
  source('plumb.R') 
  //the server is now running
```
5)install React app packages using <b>npm install</b> commande from another terminal </br>
6)start the react app using the <b>npm start</b> commande 
7)if you have problem with the react app not fetching data install chrome extension <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">Allow-control Allow origin </a> </br> which disables chromes CORS checking security


