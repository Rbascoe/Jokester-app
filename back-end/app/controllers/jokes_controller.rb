class JokesController < ApplicationController

    before_action :find_joke, only: [:show]

    def index
        jokes = Joke.all 
        render json: jokes
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
        parmas.require(:joke).permit(:description, :laughs, :frowns, :user_id)
    end

end
