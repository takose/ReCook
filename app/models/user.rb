# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  provider        :string
#  uid             :string
#  nickname        :string
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  consumer_token  :string
#  consumer_secret :string
#

class User < ApplicationRecord
  has_many :user_pieces, dependent: :destroy
  has_many :pieces, through: :user_pieces

  def self.find_or_create_by_auth_hash(auth_hash)
    return if auth_hash[:provider] != "twitter"

    User.find_or_create_by(provider: auth_hash[:provider], uid: auth_hash[:uid]) do |user|
      user.nickname = auth_hash[:info][:nickname]
      user.image_url = auth_hash[:info][:image]
      user.consumer_token = auth_hash[:credentials][:token]
      user.consumer_secret = auth_hash[:credentials][:secret]
    end
  end
end
