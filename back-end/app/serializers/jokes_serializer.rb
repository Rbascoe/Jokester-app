class JokesSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :laughs, :frowns, :user_id

  belongs_to :user
  has_many :jokecategories
  has_many :categories, through: :jokecategories

end
