@tracks.each do |track|

  json.set! track.id do
    json.track do
      json.id track.id
      json.track_url asset_path(track.track.url)
      json.img_url asset_path(track.image.url)
      json.title track.title
      json.length track.length
      json.uploader_id track.uploader_id
      json.genre track.genre
      json.created_at track.created_at
    end

    json.user do
      json.id track.uploader.id
      json.username track.uploader.username
      json.img_url track.uploader.img_url
    end
  end

end
