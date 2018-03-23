class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :zipcode
      t.string :building
      t.string :street
      t.string :phone_number
    end
  end
end
