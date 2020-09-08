# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Joke.destroy_all 
Category.destroy_all 
JokeCategory.destroy_all 


jbone = User.create(username:'Jbone')
tommy = User.create(username:'Tommy')
jenny = User.create(username:'Jenny')
karen = User.create(username:'Karen')

joke1 = Joke.create(description:"Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.", 
laughs: 10, 
frowns: 2 , 
user: jenny)

joke2 = Joke.create(description:"What do you call a dinosaur that is sleeping? A dino-snore!", 
laughs: 6, 
frowns: 1, 
user: jbone)

joke3 = Joke.create(description:"I told my wife she was drawing her eyebrows too high. She looked surprised.", 
laughs: 3, 
frowns: 7, 
user: karen)

joke4 = Joke.create(description:"Someone stole my Microsoft office and they’re gonna pay. You have my Word.", 
laughs: 6, 
frowns: 11, 
user: tommy)

joke5 = Joke.create(description:"Someone stole my mood ring. I don’t know how I feel about that.",
laughs: 20,
frowns: 0,
user: jbone)


category1 = Category.create(title: "Technology")
category2 = Category.create(title: "Dad Jokes")
category3 = Category.create(title: "Miscellaneous")
category4 = Category.create(title: "Animal Jokes")
category5 = Category.create(title: "Knock Knock Jokes")


jc1 = JokeCategory.create(joke_id: joke1.id, category_id: category3.id)
jc2 = JokeCategory.create(joke_id: joke2.id, category_id: category4.id)
jc3 = JokeCategory.create(joke_id: joke3.id, category_id: category2.id)
jc4 = JokeCategory.create(joke_id: joke4.id, category_id: category1.id)
jc5 = JokeCategory.create(joke_id: joke5.id, category_id: category3.id)
