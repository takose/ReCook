class AddDescColumnToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :desc, :string
  end
end
