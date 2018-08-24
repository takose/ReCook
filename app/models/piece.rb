# == Schema Information
#
# Table name: pieces
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Piece < ApplicationRecord
  has_many :user_pieces, dependent: :destroy
  has_many :users, through: :user_pieces
end
