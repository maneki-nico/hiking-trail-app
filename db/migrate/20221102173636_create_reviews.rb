class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.string :rating, null: false

      t.belongs_to :trail, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
