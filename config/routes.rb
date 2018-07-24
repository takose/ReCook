Rails.application.routes.draw do
  resources :recipes, only: [:index, :new]
  root 'recipes#index'
  get '*path', to: 'recipes#index'

  get 'recipes/*path', to: 'recipes#index'

  get '/auth/twitter/callback', to: 'sessions#create'
end
