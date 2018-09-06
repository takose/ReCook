class Api::RecipesController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    recipe = ''
    body = JSON.parse(request.body.read)
    if body['recipeId']
      recipe = Recipe.find(body['recipeId'])
    else
      user = User.find_by(consumer_token: body['token'])
      recipe = Recipe.create(user_id: user.id)
    end
    recipe.update_attribute(:title, body['title'])
    render json: recipe 
  end
end
