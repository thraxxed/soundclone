Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :index, :update, :show, :destroy]
    resources :comments, only: [:create, :index, :destroy, :show]
  end
  root to: 'root#root'
end
