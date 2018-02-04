class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.uploader = current_user


    # TODO FIX THIS vvvvvvvvvvvv
    @track.length = 120;
    # TODO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end

  end

  def index
    @tracks = Track.all
    @users = User.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def update
    @track = Track.find(params[:id])

    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @track = Track.find(params[:id])

    if @track.destroy
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:track, :title, :genre, :image)
  end

end
