class CreateInspections < ActiveRecord::Migration[5.1]
  def change
    create_table :inspections do |t|
      t.string :inspection_date
      t.string :inspection_type
      t.string :restaurant_id
      t.integer :score
      t.string :grade
      t.string :grade_date
      t.string :action
      t.decimal :lat, null:true
      t.decimal :long, null:true

    end
  end
end
