class Api::StepsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    recipe = ''
    if params[:recipeId]
      recipe = Recipe.find(params[:recipeId])
    else
      # recipe = Recipe.create(user_id: current_user.id)
      recipe = Recipe.create(user_id: User.first.id) # TODO
    end
    p res = JSON.parse(request.body.read)
    step = Step.new({piece_id: res['recipeId'], content: res['content']})
    step.update_attribute(:recipe_id, recipe.id)
    p step.content
    render json: step.content
  end
end