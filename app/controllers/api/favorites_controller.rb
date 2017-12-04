class Api::FavoritesController < ApplicationController 
    
      before_action :set_favorite, only: [:update, :destroy]
    
      def index 
        render json: Favorite.all
      end
    
      def create 
        favorite = Favorite.new(favorite_params)
        if favorite.save 
          render json: favorite
        else 
          render json: { message: surboard.errors }, status: 400
        end 
      end
    
      def update 
        if @favorite.update(favorite_params)
          render json: @favorite
        else 
          render json: { message: @favorite.errors }, status: 400
        end
      end
    
      def destroy 
        if @favorite.destroy
          render status: 204
        else 
          render json: { message: "Unable to remove this favorite" }, status: 400
        end 
      end
    
      private 
    
        def set_favorite 
          @favorite = Favorite.find_by(id: params[:id])
        end
    
        def favorite_params
          params.require(:favorite).permit(:title, :url, :is_album)
        end
    
    end
    