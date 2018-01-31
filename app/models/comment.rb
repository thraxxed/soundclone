# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  user_id    :integer          not null
#  track_id   :integer          not null
#  track_time :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :user_id, :track_id, :track_time, presence: true

  belongs_to :track
  belongs_to :user
end
