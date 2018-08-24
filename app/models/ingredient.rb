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

class Ingredient < ApplicationRecord
end
