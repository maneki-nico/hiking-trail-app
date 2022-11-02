Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/trails', to: "static_pages#index"
  get '/trails/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"
  
  namespace :api do
    namespace :v1 do
      resources :trails, only: [:index, :show]
      resources :users, only: [:show]
    end
  end

  # namespace :api do
  #   namespace :v1 do
  #     resources :users, only: [:show]
  #   end
  # end


end
