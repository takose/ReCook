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

require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
