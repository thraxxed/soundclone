json.array! @users do |user|
  json.extract! user, :username, :id
  json.img_url user.avatar.url
end
