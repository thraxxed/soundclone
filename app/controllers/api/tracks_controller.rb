class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.uploader = current_user


    # TODO FIX THIS GARBAGE vvvvvvvvvvvv
    @track.track_file_name = "w.mp3"
    @track.track_content_type = "audio/mp3"
    @track.track_file_size = 44
    @track.track_updated_at = Date.new
    @track.length = 120
    # TODO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    if @track.save
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:track, :title, :genre, :image)
  end

end
