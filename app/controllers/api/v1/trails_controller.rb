class Api::V1::TrailsController < ApiController

    def index

        render json: Trail.all
    end
    
    def show

        render json: Trail.find(params[:id]), serializer: TrailShowSerializer
    end
end