require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

    describe "POST#create" do
        let!(:trail_1) { Trail.create(
            name: "Mt Greylock", 
            city: "Amherst", 
            zip: "01234", 
            route_type: "Loop", 
            length: "3km",
            elevation: "3km",
            difficulty: "9",
            description: "A description!"
        ) }
        let!(:user_1) { User.create(
            email: "email1@email.com",
            username: "username",
            password: "password",
            zip: "01234"
        )}
        let!(:review_1) { Review.create(
            rating: "4",
            body: "Great hike! Could have been tidier.",
            trail: trail_1,
            user: user_1
        ) }

        it "should return a successful status" do
            get :create, params: {trail_id: trail_1.id, current_user: user_1, review: { rating: "4", body: "Great hike! Could be tidier."}}

            expect(response.status).to eq(200)
            expect(response.content_type).to eq("application/json")
        end  

        it "should return the successfully added review" do
            sign_in(user_1)
            post :create, params: {trail_id: trail_1.id, review: { rating: "4", body: "Great hike! Could have been tidier."}}
            
            parsed_response = JSON.parse(response.body)
            
            expect(parsed_response["review"]["rating"]).to eq(review_1.rating)
            expect(parsed_response["review"]["body"]).to eq(review_1.body)
        end

        it "should return the blank body error message" do
            sign_in(user_1)
            post :create, params: {trail_id: trail_1.id, review: { rating: "4", body: ""}}
            
            parsed_response = JSON.parse(response.body)
            
            expect(parsed_response["errors"]).to eq("Body can't be blank")
        end

        it "should return the blank rating error message" do
            sign_in(user_1)
            post :create, params: {trail_id: trail_1.id, review: { rating: "", body: "Hmm I can't decide how I feel..."}}
            
            parsed_response = JSON.parse(response.body)
            
            expect(parsed_response["errors"]).to eq("Rating can't be blank")
        end

        it "should return the blank rating and body error message" do
            sign_in(user_1)
            post :create, params: {trail_id: trail_1.id, review: { rating: "", body: ""}}
            
            parsed_response = JSON.parse(response.body)
            
            expect(parsed_response["errors"]).to eq("Body can't be blank and Rating can't be blank")
        end
    end
end