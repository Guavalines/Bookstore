class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]
  skip before_action :verify_authenticity_token

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy

    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successful'}
      format.json { render json: Post.all, status: :ok }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :body, :id)
    end
end
