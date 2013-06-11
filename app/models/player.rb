class Player < ActiveRecord::Base
  has_many :races
  has_many :games, :through => :races
  # Remember to create a migration!
end
