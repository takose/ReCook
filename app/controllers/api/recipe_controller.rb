class Api::RecipeController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    recipe = ''
    body = JSON.parse(request.body.read)
    if body['recipeId']
      recipe = Recipe.find(body['recipeId'])
    else
      # recipe = Recipe.create(user_id: current_user.id)
      recipe = Recipe.create(user_id: User.first.id) # TODO
    end
    recipe.update_attribute(:title, body['title'])
    render json: recipe 
  end
end
