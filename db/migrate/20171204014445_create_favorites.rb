class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :url
      t.boolean :is_album

      t.timestamps
    end
  end
end
