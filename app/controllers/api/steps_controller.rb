class Api::StepsController < ApplicationController
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
    step = Step.new({piece_id: body['pieceId'], content: body['content']})
    step.update_attribute(:recipe_id, recipe.id)
    render json: step
  end
end
