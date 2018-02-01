# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  track_url   :string           not null
#  title       :string           not null
#  length      :integer          not null
#  uploader_id :integer          not null
#  genre       :string
#  img_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
