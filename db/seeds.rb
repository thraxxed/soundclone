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

u = User.create(username: "seth", password_digest: "b", img_url: "w")

User.create(username: "smokey", password_digest: "b", img_url: "w")

User.create(username: "kusher", password_digest: "b", img_url: "w")

t = Track.create(title: "karate chop", length: 44, uploader_id: u.id, genre: "atlanta", img_url: "w")

c = Comment.create(body: "hey", user_id: u.id, track_id: t.id, track_time: 20)

r = Repost.create(user_id: u.id, track_id: t.id)
