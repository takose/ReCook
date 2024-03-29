class Api::RecipesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render json: Recipe.all.to_json({
      only: [:id, :title, :origin_id, :desc],
      include: {
        user: { only: [:id, :nickname, :image_url] }
      }
    })
  end

  def edit
    recipe = Recipe.find(params[:id])
    render json: recipe
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
    recipe.update_attributes({ title: body['title'], desc: body['desc'] })
    render json: recipe
  end

  def fork
    body = JSON.parse(request.body.read)
    user = User.find_by(consumer_token: body['token'])
    origin_recipe = Recipe.find(params[:id])
    new_recipe = origin_recipe.dup
    new_recipe.update_attributes!(user_id: user.id, origin_id: params[:id])
    next_id = nil
    origin_recipe.sorted_steps.reverse.each do |step|
      newStep = step.dup
      newStep.update_attributes!(recipe_id: new_recipe.id, next_id: next_id)
      next_id = newStep.id
    end
    render json: new_recipe
  end

  def destroy
    recipe = Recipe.find(params[:id]);
    if recipe.origin_id
      Recipe.where(origin_id: params[:id]).each do |r|
        r.update!(origin_id: recipe.origin_id)
      end
    end
    recipe.destroy!
    head :ok
  end
end
