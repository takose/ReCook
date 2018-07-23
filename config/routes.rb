Rails.application.routes.draw do
  resources :recipes, only: [:index, :new]
  root 'recipes#index'
  get '*path', to: 'recipes#index'

  get 'recipes/*path', to: 'recipes#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
