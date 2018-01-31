json.array! @users do |user|
  json.extract! user, :username, :id, :img_url
end
