library(dplyr)
library(tidytext)
library(purrr)
library(ggplot2)
library(geniusr)
library(plumber)


 r <- plumb("R-api.R")  # Where 'plumber.R' is the location of the file shown above
 r$run(port=8000)
