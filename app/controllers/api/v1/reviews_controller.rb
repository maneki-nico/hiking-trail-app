class Api::V1::ReviewsController < ApiController
    def create
        review = Review.new(review_params)
        trail = Trail.find(params[:trail_id])
        review.trail = trail
        review.user = current_user
        
        if review.save
            render json: review
        else
            render json: { errors: review.errors.full_messages.to_sentence }
        end
    end

    private
    def review_params
        params.require(:review).permit(:rating, :body)
    end
end