class Step < ApplicationRecord
  belongs_to :recipe
  belongs_to :piece
  has_many :step_ingredients
  has_many :steps through: :step_ingredients
end
