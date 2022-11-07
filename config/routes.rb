Rails.application.routes.draw do
  get 'places/index'
  # root 'static_pages#index'
  root to: 'places#index'
  devise_for :users

  get '/trails', to: "static_pages#index"
  get '/trails/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"
  
  namespace :api do
    namespace :v1 do
      resources :trails, only: [:index, :show]
      resources :users, only: [:show]
      resources :places, only: %i[index]
    end
  end
end
