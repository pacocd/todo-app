Rails.application.routes.draw do
  resources :todos
  resources :users
  namespace :api do
    namespace :v1 do
      resources :todos
      resources :users
      root 'todos#index'
    end
  end

  root 'api/v1/todos#index'
end
