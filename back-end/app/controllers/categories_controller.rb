class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, include: :jokes
    
    end

    def create
        category = Category.create(category_params)
        render json: category
    end

    private

    def category_params
        params.require(:category).permit(:title)
    end



end
