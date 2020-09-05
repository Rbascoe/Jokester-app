class Category < ApplicationRecord
    has_many :jokecategories
    has_many :jokes, through: :jokecategories
end
