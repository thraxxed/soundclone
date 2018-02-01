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

class Track < ApplicationRecord
  validates :title, :length, :uploader_id, :genre, presence: true

  has_attached_file :track
  validates_attachment_content_type :track, content_type: ["audio/mp3", "audio/mpeg"]

  has_attached_file :image, default_url: "https://res.cloudinary.com/dbk2furpp/image/upload/v1517363601/default_profile_pic_heczvd.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :uploader,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :uploader_id

  def self.tracks_by_uploader_id(uploader_id)
    Track.where("uploader_id = #{uploader_id}");
  end
end
