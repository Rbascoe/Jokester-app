class CreateJokes < ActiveRecord::Migration[6.0]
  def change
    create_table :jokes do |t|
      t.string :description
      t.integer :laughs
      t.integer :frowns
      t.integer :user_id

      t.timestamps
    end
  end
end
