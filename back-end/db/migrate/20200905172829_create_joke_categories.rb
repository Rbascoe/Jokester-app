class CreateJokeCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :joke_categories do |t|
      t.integer :joke_id
      t.integer :category_id

      t.timestamps
    end
  end
end
