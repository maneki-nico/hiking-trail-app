class Api::V1::TrailsController < ApiController
    def index
        render json: Trail.all
    end
    def show
        render json: Trail.find(params[:id]), serializer: TrailShowSerializer, include: ['reviews.user']
    end
    def search
        trails = Trail.where("name ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
        render json: trails
    end
    def create
        trail = Trail.new(trail_params)

        if trail.save
            render json: trail
        else 
            render json: { errors: trail.errors.full_message.to_sentence }
        end
    end

    private
    def trail_params
        params.require(:trail).permit(
            :name,
            :city,
            :zip,
            :image_url,
            :route_type,
            :elevation,
            :difficulty,
            :length,
            :description
        )
    end
end