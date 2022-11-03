trail_1 = Trail.create(
    name: "Mt Greylock", 
    city: "Amherst", 
    zip: "01234", 
    route_type: "Loop", 
    length: "3km",
    elevation: "3km",
    difficulty: "9",
    description: "A description!"
)
trail_2 = Trail.create(
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
    email: "email@email.com",
    username: "username",
    encrypted_password: "password",
    zip: "01234"
)
user_2 = User.create(
    email: "email1@email.com",
    username: "username2",
    encrypted_password: "password",
    zip: "01235"
)
