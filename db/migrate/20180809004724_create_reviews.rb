class CreateReviews < ActiveRecord::Migration[4.2]
  def change
    create_table :reviews do |t|
      t.integer :album_id
      t.integer :user_id
      t.float :rating
      t.text :content
      t.timestamps null: false
    end
  end
end
