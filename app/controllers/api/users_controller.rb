class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    # @user.img_url = "https://res.cloudinary.com/dbk2furpp/image/upload/v1517363601/default_profile_pic_heczvd.jpg"
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = selected_user
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['Could not locate user'], status: 400
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = selected_user
  end

  def index
    @users = User.all
    render :index
  end

  private

  def selected_user
    User.find(params[:user][:id])
  end

  def user_params
    params.require(:user).permit(:username, :password, :avatar)
  end
end
