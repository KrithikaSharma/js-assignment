let quotes= ['There is a way that nature speaks, that land speaks. Most of the time we are simply not patient enough, quiet enough, to pay attention to the story.',

' The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.',

'The eye sees only what the mind is prepared to comprehend.',

'The most complicated achievements of thought are possible without the assistance of consciousness.',
'We see things not as they are, but as we are. Our perception is shaped by our previous experiences.',

'We are Divine enough to ask and we are important enough to receive.',

'When people are like each other they tend to like each other.',

'Know that although in the eternal scheme of things you are small, you are also unique and irreplaceable, as are all your fellow humans everywhere in the world.',
'Give me six hours to chop down a tree and I will spend the first four sharpening the axe.',

'In the long run we get no more than we have been willing to risk giving.',

'Face what you think you believe and you will be surprised.',

'We are Divine enough to ask and we are important enough to receive.',
'If you spend your whole life waiting for the storm  you will never enjoy the sunshine.',

'History is made by those who BREAK THE RULES.',

'I may be old enough to know better, but I am STILL young enough to DO IT..',

'The best things in life are FREE Family, Friends, Smiles, Hugs, Kisses, Love, Sleep, Good Memories ',

'Every single moment counts. When you add them all up, they equal your life. ',

'Always remember you are unique, just like everyone else.',

'It is impossible for a man to learn what he thinks he already knows ',

'If you expect the world to be fair with you bcoz you are fair with them. Its like expecting a lion not to eat you bcoz you dont eat lion.',
'The best way to predict the future is to create it',

'Whatever you do, good or bad, people will always have something negative to say. ',

'I follow the quote -Always be true to yourself-  because I only lie to others! ',

'At the touch of love everyone becomes a poet ',

'3 steps to move on. CTRL + ALT + DEL. Control yourself, look for an alternate solution & delete the situation that hurts you.', 
'We always overestimate our worries & underestimate our potential. ',
'Wishes are always granted but you just have to wait for the perfect time.',

'Every heart has a pain. Only the way of expressing it is different. Fools hide it in eyes, while brilliant hide it in their smile.',
'The best way to lie is to tell the truth',
' When someone does not like something, its often because they are not familiar with it, or they are too familiar with it.',
'  Life is not always what we want it to be. Sometimes, its what we never knew we need it to be.',
'The difference between CAN and CANNOT are only three letters. Three letter that determine your life direction.',
'Life is about making an impact, not making an income.',
'Whatever the mind of man can conceive and believe, it can achieve.',
'Strive not to be a success, but rather to be of value.',
'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
'I attribute my success to this: I never gave or took any excuse.',
'You miss 100% of the shots you don’t take.',
'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.',
'The most difficult thing is the decision to act, the rest is merely tenacity.',
'Every strike brings me closer to the next home run.',
'Definiteness of purpose is the starting point of all achievement.',
'Life isn\'t about getting and having, it\'s about giving and being.',
 'Life is what happens to you while you’re busy making other plans.',
'We become what we think about.',
 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
'Life is 10% what happens to me and 90% of how I react to it.',
 'The most common way people give up their power is by thinking they don’t have any.',
'The mind is everything. What you think you become.',
'The best time to plant a tree was 20 years ago. The second best time is now.',
 'An unexamined life is not worth living.',
  'Eighty percent of success is showing up.',
'Your time is limited, so don’t waste it living someone else’s life.',
 'Winning isn’t everything, but wanting to win is.',
'I am not a product of my circumstances. I am a product of my decisions.',
 'Every child is an artist.  The problem is how to remain an artist once he grows up.',
'You can never cross the ocean until you have the courage to lose sight of the shore.',
 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
'Either you run the day, or the day runs you.',
 'Whether you think you can or you think you can’t, you’re right.',
'The two most important days in your life are the day you are born and the day you find out why.',
 'Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.',
'The best revenge is massive success.',
'People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.',
'Life shrinks or expands in proportion to one\'s courage.',
'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
'Be yourself; everyone else is already taken',
'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'];

function newQuote(){
    let randno=Math.floor(Math.random()*(67));
    document.getElementById('quoteDisplay').innerHTML=quotes[randno];

}
