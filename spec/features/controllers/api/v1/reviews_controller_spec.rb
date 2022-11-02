require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

    describe "GET#index" do
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

        let!(:review_1) {Review.create(
            body: "It was great!",
            rating: "5",
            trail: trail_1
        )}

        it "return a successful status and content type of json" do
            get :index, params: {trail_id: trail_1.id}

            expect(response.status).to eq(200)
            expect(response.content_type).to eq("application/json")
        end  

        it "should return the reviews for the specified trail" do
            get :index, params: {trail_id: trail_1.id}

            parsed_response = JSON.parse(response.body)

            expect(parsed_response[0]["body"]).to eq(review_1.body)
            expect(parsed_response[0]["rating"]).to eq(review_1.rating)
        end
    end
end