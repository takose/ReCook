# == Schema Information
#
# Table name: steps
#
#  id                 :bigint(8)        not null, primary key
#  step_ingredient_id :integer
#  recipe_id          :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  content            :jsonb
#  piece_id           :integer
#

class Step < ApplicationRecord
  belongs_to :recipe
  belongs_to :piece
  has_many :step_ingredients
  has_many :steps, through: :step_ingredients
end
