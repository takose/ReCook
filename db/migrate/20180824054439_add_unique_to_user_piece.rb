class AddUniqueToUserPiece < ActiveRecord::Migration[5.2]
  def change
    add_index :user_pieces, [:user_id, :piece_id], unique: true
  end
end
