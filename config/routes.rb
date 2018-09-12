# == Route Map
#
#                    Prefix Verb URI Pattern                                                                              Controller#Action
#                   recipes GET  /recipes(.:format)                                                                       recipes#index
#                      root GET  /                                                                                        recipes#index
#                           GET  /recipes/*path(.:format)                                                                 recipes#index
#     auth_twitter_callback GET  /auth/twitter/callback(.:format)                                                         sessions#create
#                 api_steps POST /api/steps(.:format)                                                                     api/steps#create
#               api_recipes GET  /api/recipes(.:format)                                                                   api/recipes#index
#                           POST /api/recipes(.:format)                                                                   api/recipes#create
#           edit_api_recipe GET  /api/recipes/:id/edit(.:format)                                                          api/recipes#edit
#        rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  resources :recipes, only: [:index]
  root 'recipes#index'

  get 'recipes/*path', to: 'recipes#index'

  get 'auth/twitter/callback', to: 'sessions#create'

  namespace :api do
    resources :steps, only: [:create]
    resources :recipes, only: [:index, :create, :edit]
  end
end
