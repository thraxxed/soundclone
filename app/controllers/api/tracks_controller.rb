class Api::TracksController < ApplicationController

  def create
    @track = Track.new(track_params)
    @track.uploader = current_user
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def track_params
    params.require(:track).permit(:track_url, :title, :genre, :img_url)
  end

end
