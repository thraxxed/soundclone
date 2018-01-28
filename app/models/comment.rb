class Comment < ApplicationRecord
  validates :body, :user_id, :track_id, :track_time, presence: true

  belongs_to :track
  belongs_to :user
end
