class CreateUserPieces < ActiveRecord::Migration[5.2]
  def change
    create_table :user_pieces do |t|
      t.integer :piece_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
