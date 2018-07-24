class SessionsController < ApplicationController
  def create
    auth_hash = request.env['omniauth.auth']
    user = User.find_or_create_by_auth_hash(auth_hash)

    session[:user_id] = user.id
    redirect_to recipes_path
  end
end
