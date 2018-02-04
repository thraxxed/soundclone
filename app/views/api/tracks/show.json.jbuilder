json.tracks do
  json.set! @track.id do
    json.id @track.id
    json.track_url @track.track.url
    json.img_url asset_path(@track.image.url)
    json.title @track.title
    json.length @track.length
    json.uploader_id @track.uploader_id
    json.genre @track.genre
    json.created_at @track.created_at
  end
end

json.users do
  json.set! @track.uploader.id do
    json.id @track.uploader.id
    json.username @track.uploader.username
    json.img_url @track.uploader.avatar.url
  end
end
