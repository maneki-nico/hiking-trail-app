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

user_1 = User.create(
    email: "email1@email.com",
    username: "username",
    password: "password",
    zip: "01234"
)
user_2 = User.create(
    email: "email2@email.com",
    username: "username2",
    password: "password",
    zip: "01235"
)

user_3 = User.create(
    email: "email3@email.com",
    username: "username3",
    password: "password",
    zip: "01235"
)

review_1 = Review.find_or_create_by(
    body: "It was pretty good, loved the walk, for sure!",
    rating: "4",
    trail: trail_1,
    user: user_1
)

review_2 = Review.find_or_create_by(
    body: "Bad!",
    rating: "1",
    trail: trail_1,
    user: user_2
)

review_3 = Review.find_or_create_by(
    body: "Wow!",
    rating: "5",
    trail: trail_2,
    user: user_3
)
