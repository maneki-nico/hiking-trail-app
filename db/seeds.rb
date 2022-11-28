trail_1 = Trail.find_or_create_by(
    name: "Mt Greylock", 
    city: "Adams", 
    zip: "01220", 
    image_url: "https://www.tripsavvy.com/thmb/vSOPDcvlCvUdXnT4z0DBEMehJp0=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1280807984-f52186583a1540409eb184368836450f.jpg",
    route_type: "Out & Back", 
    length: "6.3 mi",
    elevation: "2,152 ft",
    difficulty: "7/10",
    description: "A beautiful mountain for the weekend rucker! Wonderful views of North-Western MA."
)

trail_2 = Trail.find_or_create_by(
    name: "Blue Hills Skyline Trail", 
    city: "Quincy", 
    zip: "02169",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzEyODMxMDAvZmQ0MDk5NDlhZDY0OWZhZGQ1MTI1ZWI1MDFiNzZjM2EuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Out & Back", 
    length: "15.2 mi",
    elevation: "3,523 ft",
    difficulty: "9/10",
    description: "Challenging route just south of Boston. What are you waiting for?"
)

trail_3 = Trail.find_or_create_by(
    name: "World's End", 
    city: "Hingham", 
    zip: "0043",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTEyNzQyNTMvYjBjYmMyYTNmMDk5YmIxOWVmYjFmZGRjZmVhZTFmOTkuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Loop", 
    length: "3.8 mi",
    elevation: "282 ft",
    difficulty: "2/10",
    description: "Easy route for the light rucker. Beautiful views of South-Eastern MA. Dogs welcome!"
)
trail_4 = Trail.find_or_create_by(
    name: "Houghton's Pond to Buck Hill", 
    city: "Milton", 
    zip: "02186",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNDg0NDU0MjUvMWY3YTE5Y2ZmNzczMTM1Y2FhZDRjY2E3ZTNhMzRmOGIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Out & Back", 
    length: "3.5 mi",
    elevation: "544 ft",
    difficulty: "5/10",
    description: "Discover a beautiful trail in Milton! This route gives a moderate challenge, so come prepared."
)
trail_5 = Trail.find_or_create_by(
    name: "Lynn Woods Reservation", 
    city: "Lynn", 
    zip: "01950",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEyMzU2OTgvMGMzODkxMWM2ZGQzYmI1YjFiMjc0ZDEzMTAzZDU2OTIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Loop", 
    length: "5.0 mi",
    elevation: "328 ft",
    difficulty: "6/10",
    description: "Take a moderate hike through the massive, historic Lynn Woods Reservation. Head off the path for some extra challenge and beautiful views!"
)
trail_6 = Trail.find_or_create_by(
    name: "Pearce Lake and Upper Pond Trail", 
    city: "Saugus", 
    zip: "01960",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEzNjUzNDYvZjU2MzUyNzA3MzhkMDcyMGE3M2EwYThkOWVhNmQ5NzEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Loop", 
    length: "2.4 mi",
    elevation: "154 ft",
    difficulty: "4/10",
    description: "Come see the calming views of tepid waters in Saugus! Popular area for fishing, hiking, and running."
)
trail_7 = Trail.find_or_create_by(
    name: "Ridge Trail", 
    city: "Saugus", 
    zip: "01906",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMzExMjEyMDEvZGY0ZDJlMmM0NDMyMjhiNWNlZDc4YjFkOWFkZGQzNjIuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Loop", 
    length: "4.1 mi",
    elevation: "531 ft",
    difficulty: "4/10",
    description: "Enjoy the solitude and quiet on this lovely Saugus loop. Considered a moderate hike it will take about 2 hours to complete."
)
trail_8 = Trail.find_or_create_by(
    name: "Trail of the Ledges", 
    city: "Lenox", 
    zip: "01240",
    image_url: "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjkyMjQyMTEvMzE5OWIzNzk2ZThkZGMwOTQ3Y2ZmMDFkZGI4MzcxYzQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==",
    route_type: "Loop", 
    length: "2.6 mi",
    elevation: "938 ft",
    difficulty: "9/10",
    description: "Prepare yourself for this challenging route! Beautiful wildflowers, and quiet vistas await you in Lenox."
)

user_1 = User.create(
    email: "email1@email.com",
    username: "ronaldMcRucker",
    password: "password",
    zip: "01234"
)
user_2 = User.create(
    email: "email2@email.com",
    username: "VEXUSxINxRUIN",
    password: "password",
    zip: "01235"
)

user_3 = User.create(
    email: "email3@email.com",
    username: "SamDavis",
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
