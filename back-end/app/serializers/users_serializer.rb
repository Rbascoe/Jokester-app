class UsersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username

  has_many :jokes
  
end
