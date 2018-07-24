# == Schema Information
#
# Table name: users
#
#  id         :bigint(8)        not null, primary key
#  provider   :string
#  uid        :string
#  nickname   :string
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  def self.find_or_create_by_auth_hash(auth_hash)
    return if auth_hash.provider != "twitter"

    uid = auth_hash[:uid]
    nickname = auth_hash[:info][:nickname]
    image_url = auth_hash[:info][:image]

    User.find_or_create_by(provider: provider, uid: uid) do |user|
      user.nickname = nickname
      user.image_url = image_url
    end
  end
end
