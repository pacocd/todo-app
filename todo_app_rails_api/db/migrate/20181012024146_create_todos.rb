class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.boolean :completed
    end
  end
end
