class AddColumnToStep < ActiveRecord::Migration[5.2]
  def change
    add_column :steps, :next_id, :integer
  end
end
