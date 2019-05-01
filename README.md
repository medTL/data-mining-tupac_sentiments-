
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
to start the server run this commands in a terminal while you are in the R-server</br>
```
  R </br>
  library(geniusr)</br>
  genius_token()</br>
  //enter the access Token </br>
  source('plumb.R') </br>
  //the server is now running
```
5) start the react app using the <b>npm start</b> commande 


