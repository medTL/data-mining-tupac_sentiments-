library(dplyr)
library(tidytext)
library(purrr)
library(ggplot2)
library(geniusr)
library(plumber)



tupacid<-59

bing <- get_sentiments("bing")

#* @get /artist
function(){
  art<-get_artist_meta(artist_id = 59)
  
  return(art)
}

#* @get /songs
function(){
  tupacsongs<-readRDS("tupacsongs.rds")
  
  return(tupacsongs)
  
}
#* @get /songs/<id>
function(id){
  tupacsongs<-readRDS("tupacsongs.rds")
  song<-subset(tupacsongs,tupacsongs$song_id==id)
}

#* @get /songlyric/<id>
function(id){
 
  lyric<-scrape_lyrics_id(song_id = id)
  meta<-get_song_meta(song_id =  id)
 x<-list(song_meta = meta,lyrics = lyric)
  return(x)
  
}
#* @get /sentiment/<id>
function(id){
  lyric<-scrape_lyrics_id(song_id = id)
  
  sentiment <- lyric %>%
    unnest_tokens(word, line) %>%
    # remove stop words
    anti_join(stop_words) %>%
    # join afinn score
    inner_join(bing) %>%
    # count negative / positive words
    count(word, sentiment, sort = TRUE) %>%
    ungroup()
  graph<<- sentiment %>%
    group_by(sentiment) %>%
    top_n(10) %>%
    ungroup() %>%
    mutate(word = reorder(word, n)) %>%
    ggplot(aes(word, n, fill = sentiment)) +
    geom_col(show.legend = FALSE) +
    facet_wrap(~sentiment, scales = "free_y") +
    labs(y = "Coloring Book: Words that contribute the most to positive and negative sentiment",
         x = NULL) +
    coord_flip() +
    theme_minimal()
  
  pr<-aggregate(n~sentiment,data=sentiment,sum)
   x<-list(percentage =pr, word_sentiment =sentiment)
  
  return(x)
  
  
}

#* @get /graph/<id>
#* @png
function(id){
 
 
  print(graph)
  
}
