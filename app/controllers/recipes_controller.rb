class RecipesController < ApplicationController
  before_action :set_current_user, only: [:index]
  def index
  end

  private

  def set_current_user
    @user = current_user.to_json(only: [:nickname, :image_url])
    @pieces = current_user&.pieces&.to_json(only: [:id, :name])
  end
end
