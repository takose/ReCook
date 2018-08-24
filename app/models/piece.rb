class Piece < ApplicationRecord
  has_many :users, through: :user_pieces
  has_many :user_pieces, dependent: :destroy
end
