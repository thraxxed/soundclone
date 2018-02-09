# README

SoundClone is a web application designed to emulate the functionality and style of popular
music platform SoundCloud.  Users may upload their own tracks, and listen to those uploaded by others.

Technologies used:
  * Ruby on Rails back-end
  * React/Redux front-end
  * PostgreSQL database
  * Amazon Web Services for image/audio Hosting

# Features

## Secure User Authentication

Users may create new accounts, with their passwords stored securely using BCrypt encryption.  They may also upload
a personal profile picture.  To immediately jump into the action, users are given the option of a "Demo Login" feature
to avoid making a new account.

![Session](https://i.imgur.com/ysRAeQ0.jpg)

## Feed/Stream

Once logged in, Users are shown a collection of the most recently uploaded tracks.  Any tracks which
were uploaded by the logged-in user will also display buttons allowing the user to edit the track's information,
as well as to delete the track.

![Session](https://i.imgur.com/eNH6pLc.png)

## Track Upload

Users may Upload their own songs, with support for also assigning the song a unique image, as well as a genre.
Only valid .mp3 files are accepted for audio.  On a user's specific page, the tracks which they have personally
uploaded may be seen.

##
