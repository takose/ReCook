# == Schema Information
#
# Table name: recipes
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  description :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  origin_id   :integer
#

require 'rails_helper'

RSpec.describe Recipe, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
