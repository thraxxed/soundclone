json.tracks do
  @tracks.each do |track|
    json.set! track.id do
        json.id track.id
        json.track_url track.track.url
        json.img_url asset_path(track.image.url)
        json.title track.title
        json.length track.length
        json.uploader_id track.uploader_id
        json.genre track.genre
        json.created_at track.created_at
    end

  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
        json.id user.id
        json.username user.username
        json.img_url asset_path(user.avatar.url)
    end
  end
end
