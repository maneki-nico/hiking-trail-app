require "rails_helper"

# verb / action 
# check the response status 
# check the response content type 
# check the attributes of the response body (dont forget the use JSON)

RSpec.describe Api::V1::TrailsController, type: :controller do

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
        let!(:trail_2) { Trail.create(
            name: "Long, Long Trail", 
            city: "West Stix", 
            zip: "01235", 
            route_type: "Winding Roads", 
            length: "2km",
            elevation: "100m",
            difficulty: "3",
            description: "You wil be lost but happy."
        ) }

        it "return a successful status and content type of json" do
            get :index

            expect(response.status).to eq(200)
            expect(response.content_type).to eq("application/json")
        end  

        it "should return all trails from the database" do
            get :index 

            parsed_response = JSON.parse(response.body)
            
            expect(parsed_response[0]["id"]).to eq(trail_1.id)
            expect(parsed_response[0]["name"]).to eq(trail_1.name)
            expect(parsed_response[0]["zip"]).to eq(trail_1.zip)
            
            expect(parsed_response[1]["id"]).to eq(trail_2.id)
            expect(parsed_response[1]["name"]).to eq(trail_2.name)
            expect(parsed_response[1]["zip"]).to eq(trail_2.zip)
        end
    end
end