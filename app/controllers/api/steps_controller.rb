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
    if body['stepId']
      step = Step.find(body['stepId'])
      step.update_attributes!(content: body['content'])
    else
      last_step = recipe.steps.find_by(next_id: nil)
      step = Step.new({piece_id: body['pieceId'], content: body['content']})
      step.update_attributes!(:recipe_id, recipe.id)
      last_step.update_attributes!(next_id: step.id) if last_step
    end
    render json: recipe
  end
end
