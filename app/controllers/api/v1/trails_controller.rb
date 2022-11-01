class Api::V1::TrailsController < ApiController

    def index
        trails = Trail.all
        render json: trails
    end
    
end