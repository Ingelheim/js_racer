
def current_player_one
  current_player_one ||= Player.find_by_id(session[:player_one]) 
end


def current_player_two
  current_player_two ||= Player.find_by_id(session[:player_two])  
end




def current_game
  current_game ||= Game.find_by_id(session[:game])
end

