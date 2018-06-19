class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.text :description
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end