Rails.application.routes.draw do
  resources :todos
  resources :users
  namespace :api do
    namespace :v1 do
      resources :todos
      resources :users
    end
  end
end
