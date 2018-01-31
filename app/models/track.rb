# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  length      :integer          not null
#  uploader_id :integer          not null
#  genre       :string           not null
#  img_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  validates :title, :length, :uploader_id, :genre, :img_url, presence: true

  belongs_to :uploader,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :uploader_id
end
