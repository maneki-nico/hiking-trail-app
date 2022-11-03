class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :zip, :created_at
end