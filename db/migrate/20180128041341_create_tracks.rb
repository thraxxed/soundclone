class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :length, null: false
      t.integer :uploader_id, null: false
      t.string :genre, null: false
      t.string :img_url, null: false
      t.timestamps
    end
    add_index :tracks, :uploader_id
  end
end
