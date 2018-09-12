class Api::RecipesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Recipe.all.to_json({
      only: [:id, :title, :origin_id],
      include: {
        user: { only: [:nickname, :image_url] }
      }
    })
  end

  def edit
    recipe = Recipe.find(params[:id])
    render json: recipe.to_json({
      only: [:id, :title, :origin_id],
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

  def fork
    body = JSON.parse(request.body.read)
    user = User.find_by(consumer_token: body['token'])
    origin_recipe = Recipe.find(params[:id])
    new_recipe = origin_recipe.dup
    new_recipe.update_attributes!(user_id: user.id, origin_id: params[:id])
    origin_recipe.steps.each do |step|
      newStep = step.dup
      newStep.update_attributes(recipe_id: new_recipe.id)
    end
    render json: new_recipe
  end

  def destroy
    Recipe.find(params[:id]).destroy
    head :ok
  end
end
