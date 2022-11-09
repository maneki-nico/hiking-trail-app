Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/trails', to: "static_pages#index"
  get '/trails/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"
  
  namespace :api do
    namespace :v1 do
      resources :trails, only: [:index, :show] do
        resources :reviews, only: [:create]
      end
      post 'trails/search', to: 'trails#search'
      resources :trails, only: [:index, :show]
      resources :users, only: [:show]
    end
  end
end
