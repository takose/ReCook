class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.integer :step_ingredient_id
      t.string :piece_step_type
      t.integer :piece_step_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
