class JokeCategory < ApplicationRecord
    belongs_to :Joke
    belongs_to :Category 
end
