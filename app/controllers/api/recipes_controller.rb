class Api::RecipesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Recipe.all.to_json({
      only: [:id, :title],
      include: {
        user: { only: [:nickname, :image_url] }
      }
    })
  end

  def edit
    recipe = Recipe.find(params[:id])
    render json: recipe.to_json({
      only: [:id, :title],
      include: {
        steps: { only: [:id, :piece_id, :content] }
      }
    })
  end

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

  def destroy
    Recipe.find(params[:id]).destroy
    head :ok
  end
end
