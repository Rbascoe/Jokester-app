class DropJokeCategoriesTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :joke_categories
  end
end
