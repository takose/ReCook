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
      if body['option']
        if body['option']['direction'] == 'after'
          before_step = Step.find(body['option']['stepId'])
          step = Step.create({recipe_id: recipe.id, piece_id: body['pieceId'], content: body['content'], next_id: before_step.next_id})
          before_step.update!({next_id: step.id})
        elsif body['option']['direction'] == 'before'
          before_step = Step.find_by(next_id: body['option']['stepId'])
          step = Step.create({recipe_id: recipe.id, piece_id: body['pieceId'], content: body['content'], next_id: body['option']['stepId']})
          before_step.update!({next_id: step.id}) if before_step
        end
      else
        last_step = recipe.steps.find_by(next_id: nil)
        step = Step.new({piece_id: body['pieceId'], content: body['content']})
        step.update_attributes!(recipe_id: recipe.id)
        last_step.update_attributes!(next_id: step.id) if last_step
      end
    end
    render json: recipe
  end

  def destroy
    step = Step.find(params[:id])
    before_step = Step.find_by(next_id: params[:id])
    before_step.update_attributes!(next_id: step.next_id) if before_step
    step.destroy!
    head :ok
  end
end
