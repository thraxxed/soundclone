class AddImageAttachmentToTracks < ActiveRecord::Migration[5.1]
  def change
    drop_table :tracks
    create_table :tracks do |t|
      t.attachment :track, null: false
      t.attachment :image
      t.string :title, null: false
      t.integer :length, null: false
      t.integer :uploader_id, null: false
      t.string :genre
      t.timestamps
    end
    add_index :tracks, :uploader_id
  end
end
