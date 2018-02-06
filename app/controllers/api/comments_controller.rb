class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    p comment_params

    # TODO FIX THIS vvvvvvvvvvvv
    @comment.track_time = 0;
    # TODO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    if @comment.save
      render :show
    else
      p @comment.errors.full_messages
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def index
    p "hey" if params[:track_id]
    if params[:track_id]
      @comments = Comment.where("track_id = #{params[:track_id]}")
    else
      @comments = Comment.all
    end
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end


  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
