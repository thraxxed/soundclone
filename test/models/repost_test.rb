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

require 'test_helper'

class RepostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
