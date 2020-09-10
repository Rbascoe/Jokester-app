class JokesController < ApplicationController

    before_action :find_joke, only: [:show]

    def index
        jokes = Joke.all 
        render json: jokes, includes: :user
    end

    def show
        render json: @joke
    end

    def create
        joke = Joke.create(joke_params)
        render json: joke
    end


    private

    def find_joke
        @joke = Joke.find(params[:id])
    end

    def joke_params
        params.require(:joke).permit(:description, :laughs, :frowns, :user_id, :category_id)
    end

end
