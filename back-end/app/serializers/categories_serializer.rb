class CategoriesSerializer
  # include FastJsonapi::ObjectSerializer
  attributes :title

  has_many :jokes
  
end
