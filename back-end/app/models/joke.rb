class Joke < ApplicationRecord
    belongs_to :user
    has_many :jokecategories
    has_many :categories, through: :jokecategories
end
