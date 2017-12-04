Rails.application.routes.draw do
  namespace :api do
    resources :favorites , except: :show
  end
end
