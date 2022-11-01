class Trail < ApplicationRecord
    validates :name, presence: true
    validates :city, presence: true
    validates :zip, presence: true
    validates :route_type, presence: true
    validates :elevation, presence: true
    validates :difficulty, presence: true
    validates :length, presence: true
    
end