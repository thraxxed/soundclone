class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :track_id, null: false
      t.integer :track_time, null: false
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :track_id
  end
end
