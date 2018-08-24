# == Schema Information
#
# Table name: user_pieces
#
#  id         :bigint(8)        not null, primary key
#  piece_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserPiece < ApplicationRecord
  belongs_to :user
  belongs_to :piece
end
