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
#  desc        :string
#

class RecipeSerializer < ActiveModel::Serializer
  class RecipeSerializer < ActiveModel::Serializer
    attributes :id, :title
  end
  attributes :id, :title, :origin_id, :steps

  belongs_to :user
  has_many :steps

  belongs_to :origin_recipe, class_name: 'Recipe', foreign_key: 'origin_id', optional: true

  def steps
    object.sorted_steps
  end
end
