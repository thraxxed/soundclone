json.comment do
  json.id @comment.id
  json.body @comment.body
  json.user_id @comment.user_id
  json.track_id @comment.track_id
  json.created_at @comment.created_at.strftime('%d/%m/%Y')
end
