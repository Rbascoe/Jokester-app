class UserController < ApplicationController

    def index
        users = User.all
        render json: users, include: :jokes
    end


end
