class Api::V1::TrailsController < ApiController

    def index
        trails = Trail.all
        render json: trails
    end
    
    def show
        trail = Trail.find(params[:id])
        render json: trail
    end
end