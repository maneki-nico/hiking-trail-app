class TrailSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :zip, :image_url
end
