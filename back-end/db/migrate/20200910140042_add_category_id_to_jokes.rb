class AddCategoryIdToJokes < ActiveRecord::Migration[6.0]
  def change
    add_column :jokes, :category_id, :integer
  end
end
