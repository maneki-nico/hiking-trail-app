class Api::V1::ReviewsController < ApiController

    def index
        trail = Trail.find(params[:trail_id])
        reviews = trail.reviews
        
        render json: reviews
    end
end