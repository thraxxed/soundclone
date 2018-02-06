json.comments do
  json.set! @comment.id do
    json.id @comment.id
    json.user_id @comment.user_id
    json.track_id @comment.track_id
    json.created_at @comment.created_at.strftime('%d/%m/%Y')
  end
end
