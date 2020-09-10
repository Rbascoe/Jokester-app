class JokesSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :laughs, :frowns, :user_id, :category_id

  belongs_to :user
  belongs_to :category

end
