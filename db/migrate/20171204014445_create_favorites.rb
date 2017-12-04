class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string :title
      t.string :url

      t.timestamps
    end
  end
end
