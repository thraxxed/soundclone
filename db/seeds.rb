  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all
Comment.destroy_all
Repost.destroy_all

u = User.create(username: "username", password: "password", img_url: "https://res.cloudinary.com/dbk2furpp/image/upload/v1517378085/diddy_epgz5c.jpg")

u2 = User.create(username: "seth", password_digest: "b", img_url: "https://res.cloudinary.com/dbk2furpp/image/upload/v1517378085/diddy_epgz5c.jpg")

User.create(username: "seed3", password_digest: "b", img_url: "https://res.cloudinary.com/dbk2furpp/image/upload/v1517378085/diddy_epgz5c.jpg")

# t = Track.new(title: "Lil B - based god", length: 44, uploader_id: u2.id, genre: "Hip-Hop")
#
# t.track = open('app/assets/audio/basedgod.mp3')
# t.image = open('app/assets/images/blueflame_art.jpg')
# t.save
#
# t = Track.new(title: "Chief Keef - Don't Like", length: 44, uploader_id: u.id, genre: "Drill")
#
# t.track = open('app/assets/audio/basedgod.mp3')
# t.image = open('app/assets/images/finallyrich_art.jpg')
# t.save
#
# t = Track.new(title: "seed song 3", length: 44, uploader_id: u.id, genre: "Dance & EDM")
#
# t.track = open('app/assets/audio/basedgod.mp3')
# t.image = open('app/assets/images/finallyrich_art.jpg')
# t.save
#
# t = Track.new(title: "seed song 4", length: 44, uploader_id: u.id, genre: "Hip-Hop/Rap")
#
# t.track = open('app/assets/audio/basedgod.mp3')
# t.image = open('app/assets/images/finallyrich_art.jpg')
# t.save
# #
# # c = Comment.create(body: "hey", user_id: u.id, track_id: t.id, track_time: 20)
# #
# # r = Repost.create(user_id: u.id, track_id: t.id)
