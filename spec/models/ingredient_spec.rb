# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint(8)        not null, primary key
#  name_en    :string
#  name_ja    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
