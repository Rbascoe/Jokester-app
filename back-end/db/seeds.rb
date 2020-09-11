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
 


jbone = User.create(username:'Jbone')
tommy = User.create(username:'Tommy')
jenny = User.create(username:'Jenny')
karen = User.create(username:'Karen')

category1 = Category.create(title: "Technology")
category2 = Category.create(title: "Dad Jokes")
category3 = Category.create(title: "Miscellaneous")
category4 = Category.create(title: "Animal Jokes")
category5 = Category.create(title: "Knock Knock Jokes")

joke1 = Joke.create(description:"Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.", 
laughs: 10, 
frowns: 2 , 
user: jenny,
category: category2)

joke2 = Joke.create(description:"What do you call a dinosaur that is sleeping? A dino-snore!", 
laughs: 6, 
frowns: 1, 
user: jbone,
category: category2)

joke3 = Joke.create(description:"I told my wife she was drawing her eyebrows too high. She looked surprised.", 
laughs: 3, 
frowns: 7, 
user: karen,
category: category4)

joke4 = Joke.create(description:"Someone stole my Microsoft office and they’re gonna pay. You have my Word.", 
laughs: 6, 
frowns: 11, 
user: tommy,
category: category5)

joke5 = Joke.create(description:"Someone stole my mood ring. I don’t know how I feel about that.",
laughs: 20,
frowns: 0,
user: jbone,
category: category1)

joke6 =Joke.create(description:"Today, my son asked \"Can I have a book mark?\" and I burst into tears. 11 years old and he still doesn't know my name is Brian.",
laughs: 0,
frowns: 0,
user: tommy,
category: category2)

joke7 =Joke.create(description:"How do you make holy water? You boil the hell out of it.",
laughs: 0,
frowns: 0,
user: jenny,
category: category2)

joke8 =Joke.create(description:"If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
laughs: 0,
frowns: 0,
user: karen,
category: category2)

joke9 =Joke.create(description:"The energizer bunny was arrested on a charge of battery.",
laughs: 0,
frowns: 0,
user: jbone,
category: category1)

joke10 =Joke.create(description:"I decided to make my password \"incorrect\" because if I type it in wrong, my computer will remind me, \"Your password is incorrect.\"",
laughs: 0,
frowns: 0,
user: karen,
category: category1)

joke11 =Joke.create(description:"My grandfather once told me my generation relied too much on technology, I screamed to him that his dos and unplugged his life support",
laughs: 0,
frowns: 0,
user: karen,
category: category1)

joke12 =Joke.create(description:"Why did the chicken cross the playground? To get to the other slide!!",
laughs: 0,
frowns: 0,
user: jenny,
category: category4)

joke13 =Joke.create(description:"Knock, knock Who’s there? Leon, Leon who? Leon me when you’re not strong!",
laughs: 0,
frowns: 0,
user: tommy,
category: category5)
