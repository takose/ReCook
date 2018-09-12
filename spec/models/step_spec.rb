# == Schema Information
#
# Table name: steps
#
#  id                 :bigint(8)        not null, primary key
#  step_ingredient_id :integer
#  recipe_id          :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  content            :jsonb
#  piece_id           :integer
#  next_id            :integer
#

require 'rails_helper'

RSpec.describe Step, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
