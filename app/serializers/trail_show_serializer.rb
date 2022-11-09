class TrailShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :zip, :image_url, :route_type, :elevation, :difficulty, :length, :description

  has_many :reviews
end
