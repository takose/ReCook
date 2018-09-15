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
