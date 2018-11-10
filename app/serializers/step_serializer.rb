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
#  next_id            :integer
#

class StepSerializer < ActiveModel::Serializer
  attributes :id, :content, :piece_id, :next_id
end
