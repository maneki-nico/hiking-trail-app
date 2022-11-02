class Review < ApplicationRecord
    validates :body, presence: true
    validates :rating, presence: true

    belongs_to :trail
end