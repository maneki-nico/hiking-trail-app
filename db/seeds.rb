# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


trail_1 = Trail.find_or_create_by(
    name: "Mt Greylock", 
    city: "Amherst", 
    zip: "01234", 
    route_type: "Loop", 
    length: "3km",
    elevation: "3km",
    difficulty: "9",
    description: "A description!"
)
trail_2 = Trail.find_or_create_by(
    name: "Long, Long Trail", 
    city: "West Stix", 
    zip: "01235", 
    route_type: "Winding Roads", 
    length: "2km",
    elevation: "100m",
    difficulty: "3",
    description: "You wil be lost but happy."
)

review_1 = Review.find_or_create_by(
    body: "It was pretty good, loved the walk, for sure!",
    rating: "4",
    trail: trail_1
)

review_2 = Review.find_or_create_by(
    body: "Bad!",
    rating: "1",
    trail: trail_1
)

review_3 = Review.find_or_create_by(
    body: "Wow!",
    rating: "5",
    trail: trail_2
)