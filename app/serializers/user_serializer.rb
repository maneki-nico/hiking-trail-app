class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :zip, :created_at
  has_many :reviews
end