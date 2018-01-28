class Track < ApplicationRecord
  validates :title, :length, :uploader_id, :genre, :img_url, presence: true

  belongs_to :uploader,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :uploader_id
end
