class UsersSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username
end