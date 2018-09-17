class StepSerializer < ActiveModel::Serializer
  attributes :id, :content, :piece_id, :next_id
end
