class Todo < ApplicationRecord
  belongs_to :user

  default_scope { order('id ASC') }
end
