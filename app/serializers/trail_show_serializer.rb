class TrailShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :zip, :route_type, :elevation, :difficulty, :length, :description

  has_many :reviews
end
