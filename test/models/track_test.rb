# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  track_file_name    :string           not null
#  track_content_type :string           not null
#  track_file_size    :integer          not null
#  track_updated_at   :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  title              :string           not null
#  length             :integer          not null
#  uploader_id        :integer          not null
#  genre              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
