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
end