get '/' do
  erb :index, layout: :intro_layout
end


post '/game' do
  @player_one_initials = params[:player1]
  @player_two_initials = params[:player2]

  player_one = Player.find_or_create_by_initials(@player_one_initials)
  player_two = Player.find_or_create_by_initials(@player_two_initials)

  session[:player_one] = player_one.id
  session[:player_two] = player_two.id

  game = Game.create
  session[:game] = game.id  

  game.players << player_one
  game.players << player_two

  erb :game
end


post '/results' do
  @winner = Player.where('initials=?', params['winner'])
  @game = Game.find(current_game.id)
  @game.winner = params['winner']
  @game.race_time = params['race_time']
  @game.save
  redirect "/results/#{current_game.id}"
end


get '/results/:id' do
  @game = Game.find(params[:id])
  erb :results
end
