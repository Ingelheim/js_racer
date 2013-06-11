get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/game' do
  player_one_initials = params[:player1]
  player_two_initials = params[:player2]

  player_one = Player.find_or_create_by_initials(player_one_initials)
  player_two = Player.find_or_create_by_initials(player_two_initials)

  session[:player_one] = player_one.id
  session[:player_two] = player_two.id

  game = Game.create
  session[:game] = game.id  

  game.players << player_one
  game.players << player_two

  erb :game
end


post '/results' do
  @winner = Player.where('initials=?', params[:winner])
  @game = Game.find(current_game.id)
  @game.touch
  @game.winner = @winner.first.initials
  @game.save
  redirect to "/results/#{current_game.id}"
end


get '/results/:id' do
  @game = Game.find(params[:id])
  # winner = params[:winner]
  # @winner = Player.find(winner)
  erb :results
end
