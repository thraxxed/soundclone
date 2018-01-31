# == Schema Information
#
# Table name: reposts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Repost < ApplicationRecord
  validates :user_id, :track_id, presence: true

  belongs_to :track
  belongs_to :user
end
