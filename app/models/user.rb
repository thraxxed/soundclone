# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  img_url             :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  has_many :tracks,
    class_name: 'Track',
    primary_key: :id,
    foreign_key: :uploader_id

  has_attached_file :avatar, default_url: "https://res.cloudinary.com/dbk2furpp/image/upload/v1517363601/default_profile_pic_heczvd.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user and BCrypt::Password.new(user.password_digest).is_password?(password)
      user
    else
      nil
    end
  end

  def password= (password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
