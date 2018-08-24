class DeleteStepPolymorphicColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :steps, :piece_step_type, :string
    remove_column :steps, :piece_step_id, :integer
    add_column :steps, :content, :jsonb
    add_column :steps, :piece_id, :integer
  end
end
