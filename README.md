# README

SoundClone is a web application designed to emulate the functionality and style of popular
music platform SoundCloud.  Users may upload their own tracks, and listen to those uploaded by others.

https://sound-clone.herokuapp.com/#/

Technologies used:
  * Ruby on Rails back-end
  * React/Redux front-end
  * PostgreSQL database
  * Amazon Web Services for image/audio hosting
  * jBuilder
  * Heroku
  * SCSS

# Features

## Secure User Authentication

Users may create new accounts, with their passwords stored securely using BCrypt encryption.  They may also upload
a personal profile picture.  To immediately jump into the action, users are given the option of a "Demo Login" feature
to avoid making a new account.

![Session](https://i.imgur.com/ysRAeQ0.jpg)

## Feed/Stream

Once logged in, Users are shown a collection of the most recently uploaded tracks.  Any tracks which
were uploaded by the logged-in user will also display buttons allowing the user to edit the track's information,
as well as to delete the track.  Each track also contains links to that track's specific page, as well as a link
to the uploader's personal page.

![Session](https://i.imgur.com/eNH6pLc.png)

## Track Upload

Users may Upload their own songs, with support for also assigning the song a unique image, as well as a genre.
Only valid .mp3 files are accepted for audio.  On a user's specific page, the tracks which they have personally
uploaded may be seen.

## Comments

On an individual track's page, users may comment on the song, and see the list of comments uploaded in
real-time.  

![Session](https://i.imgur.com/wxF7l7p.jpg)

## Footer Audio Player

When a song is playing, the audio controls may be found in the footer at the bottom of the page.  This was the
most interesting feature to implement for a number of reasons.  Components elsewhere on the page, such as the play button
on one of the tracks in the list, dispatch React actions which affect the state of the footer player, dynamically
updating in real-time.  After the current song finishes playing, this component determines the song to play next.
This was an incredibly valuable exercise in the understanding of application state, as implementing
the footer player required that multiple distinct React components are constantly communicating with one another about
their individual state, and reacting as such.  The audio player also contains custom buttons which allow the user to skip
to the next song, as well as going back to the last-played song.

![Session](https://i.imgur.com/hmpKA7s.png)
