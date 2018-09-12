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

class Recipe < ApplicationRecord
  belongs_to :user
  has_many :steps

  belongs_to :origin_recipe, class_name: 'Recipe', foreign_key: 'origin_id', optional: true
  has_many :forked_recipes, class_name: 'Recipe'
end
