---
path: '/errors'
date: '2020-10-18'
title: 'Using Errors to Learn How to Code '
author: 'Jennifer Bain'
description: 'New to coding? Me too. Let's make peace with errors once and for all.'
---

# Using Errors to Learn How to Code

#### New to coding? Me too. Let's make peace with errors once and for all.

## **Picture this:**

A global pandemic strikes and you realize that the career path you started down isn't a fit for the long haul. You're spending all of your days locked indoors and the grocery store has run out of flour and yeast so your options for distraction are diminishing. Call it practicality or call it an existential life crisis, either way, you resort to doing some research about potential new career paths.

![existential life crisis](https://media.giphy.com/media/AYC0liRZ9LoVq/giphy-downsized.gif)

That's when you see it, a beacon of light in a long list of duds:

#### ✨ **CODING** ✨

You think:

_Wow, this is pretty neat. Coding involves problem solving, creativity, AND I can get paid to do it? I think I'll try it!_

It feels good to be optimistic about something!

You dabble in online tutorials. It goes pretty well. The tutorial tell you exactly what to type and, like magic, it works! You're riding high on the successes of

```js
console.log(7638 + 34348)
```

and

```js
for (let i = 0; i <= 10; i++) {
  console.log(`I can count to ${i}.`)
}
```

and decide it's time to branch out and try some code on your own. It's a _brave new world_.

You open up a fresh JavaScript file and begin typing...

```js
const favAnimal = snail
console.log(`I love ${favAnimal}s`)
```

You eagerly check the console for your love note to snails only to discover the following message:

`ReferenceError: snail is not defined`

You mutter indignantly to nobody in particular:

_Erh, yes it is! I defined 🐌 when I set it equal to `favAnimal` using const. Do you even have eyes, computer!? 👀_

The computer doesn't respond to your inquiry. What a jerk! Suddenly you feel defeated.

Twenty minutes of experimentation later, it turns out you simply forgot that "snail" is a string and as such, it requires quotation marks.

```js
const favAnimal = "snail"
```

![example of js error](./images/error.png)

Admittedly the above example is simplistic. Nonetheless, that was me the first ~~-50-~~ few times I opened my terminal. To be fair, the above error message is 9 lines long, even though the only thing we truly care about it the type of error and the location of the error, which we can see is in example.js on line 1.

If a similar situation has intimidated you from diving deeper into the world of coding, you're not alone -- and this post is for you.

Come along, dear readers...
We're talking about errors and by the end of this, I hope you'll see why errors are friend, not foe. We'll rethink our perception of errors as we discuss the ways in which errors can be insightful and lead us down the path to become savvier developers.

## **take a step back**

Error messages look overwhelming and can therefore be anxiety-inducing.

If you feel yourself getting flustered by the error message(s) in your console, that's normal. Nobody likes being yelled at, let alone in an unfamiliar language.

Stand up, take a breath, drink a glass of water, pet your dog, and come back to it after a moment of solace.

## **reframe your thoughts**

![this is fine](https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif)

Now that we've moved past the initial shock and befuddlement of error messages, we can see that they exist for a reason, which is to point you to the portion of your code the computer cannot read!

With this new-found realization that error messages are meant to point us in the right direction, tracking down errors becomes something like a scavenger hunt. Each error is speck on the road map to building successful code. Follow the bread crumbs!

## learn the patterns

I want to let you in on a little secret:

**_computers are less complicated than humans_**

![complicated humans](https://media.giphy.com/media/1YdaQRsI2AMDTSfpgk/giphy.gif)

When I first began coding I thought computers were the problem, sending me cryptic messages meant to make me suffer. I was mapping human behaviors to an inanimate object.

The reality is, computers are ambivalent toward you. They will consistently return the same error messages in response to the same coding mistakes, no matter who is behind the keyboard.

### Why is that a good thing?

1. It's not personal. Novices get the same errors as senior devs! _Ah, errors -- the great equalizer._

2. Your error message is not unique. Doing a quick search will result in a plethora problem-solving insights specific to your error. Google is your friend. There is no shame copying and pasting your error straight into the search bar to learn from fellow-coders.

3. Since computers respond consistently and predictably, you will start to recognize patterns. This repetition will turn you into a human translator of computer gibberish.

   (_All those lines to tell me I'm missing a `}`!?_)

More often than not, you're missing a semicolon, a bracket, or some other symbol that seems arbitrary to you that your computer deems necessary.

[This article does a great job of outlining the most common error types humans make.](https://textexpander.com/blog/the-7-most-common-types-of-errors-in-programming-and-how-to-avoid-them/)

## **the error is probably not as bad as it seems**

![error](https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif)

It's not uncommon to encounter an error that is several lines long. This does not mean your entire file or directory of code is bad. If you look a little closer, the error message will often point to a specific line in the code, or file name where the error exists along with an error _type_. Be diligent, dig around, and you may find an obvious problem is being singled out in that ocean of red text.

Different languages and frameworks will throw out different flavors of error messages. Spending a few minutes to learn about the errors produced in the language being used saves time in the long run.

[This article demystifies common errors in JavaScript.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

[This article breaks down common errors in Ruby.](https://medium.com/@nerdplusdog/how-to-read-and-resolve-common-error-codes-in-ruby-9a3ae4bfb0db)

## **errors can be used to drive development**

[There are many ways to approach web development.](https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd)
Each approach has merits and is important to learn about.

However, if you are a coding novice, the reality is that errors will be your driving force for development for a little while. You'll get one code snippet right, just to discover it's caused an error at the next turn. The ripples will continue to expand outward until you've ironed out all of the kinks. You know the drill!

Just as we don't expect 5 year olds to pick up a bicycle and compete in the Tour de France, nobody expects new web developers to open their terminals and build the next social media sensation. Think of error messages as your proverbial training wheels and don't be afraid to roll those babies through to the finish line.

![tricycle](https://media.giphy.com/media/9KQ86aWlLIpG/giphy.gif)

## Let's look at an example of how errors can guide our development using Ruby on Rails:

In this example, we will examine the importance of working incrementally. Taking baby steps through our code and ~~putting out one fire~~ addressing one error message at a time can help us stay focused rather than frazzled.

Let's do this!

We open up a terminal and type the command to start a fresh app:

```sh
rails new bookshop
```

Looks like we're starting a book shop. How thrilling!

We go to the browser and type in the logical path to see a list of books (/books). An error pops up:

```
Routing Error: No route matches [GET] “/books”
```

Interesting. Seems like our app is working but we are missing the route to get to our list of books. Let's go to routes.rb and add one! We dig around in [here](https://guides.rubyonrails.org/v3.2/routing.html) for assistance from Ruby on Rails documentation and settle for:

```ruby
resources :books, only: [:index]
```

Full of hope, we refresh the browser again:

```
Routing Error: uninitialized constant BooksController
```

This word controller is familiar to us, but we're still new, so we do a quick search to remember where this controller goes and what exactly needs to go inside of the controller...Aha! We add a file to our app folder: `/controllers/books_controller.rb`. And define the index action. This snippet of code should get us started:

```ruby
class BooksController < ApplicationController
  def index
  end
end
```

It seems likely we will need to add more to this later but for the moment, our focus is on chipping through errors to get this up and running. We reload our app in the browser again:

```
Template is missing: Missing template books/index
```

![template is missing error](./images/template_missing.png)

###### _(above is an example of a template error in Rails. That looks like a lot of red text yelling at us, but in reality, it's just a friendly reminder that we are missing an erb file in our views folder that corresponds with our route.)_

A template? We aren't certain what Rails wants from us. We search 'Rails template is missing error' and see that we are not alone our confusion. The coding world has not let us down. The browser is throwing an error because it doesn't know what to render. Internet strangers suggest we create a views page and name it using the name of our controller and the action we are calling: `app/views/books/index.html.erb` We type in `<p>HELLO WORLD!</p>`, anxious to see if anything will render...

IT DOES! WE'VE ESCAPED THE GAUNTLET OF ERRORS!

But wait a minute, now how do we render a list of our actual books? Hm...
Back to Google where we find a delightfully useful resource: [Ruby on Rails documentation](https://guides.rubyonrails.org/layouts_and_rendering.html), complete with a guide explaining our newest conundrum.

When we work incrementally and celebrate each small victory, error driven development can feel like a game. Remember what I said about scavenger hunts? This is what I mean.
It's a little bit fun, right!?

![scavenger hunt](https://media.giphy.com/media/42wQXwITfQbDGKqUP7/giphy.gif)

As we continue to build our app, we will continue to find new errors, and that's okay! Just take it one step at a time.

Now we see the benefits of working incrementally. We've located some documentation that will make our lives easier for this next step of our build and we will can continue to take it one step at a time. The next time we see that 'template is missing' error, we won't feel so confused. We'll remember that we have to add an `html.erb` file to our views folder. As we learn the patterns, the flow of our code will become clearer and we will be able to work more effectively as we understand the framework we are using.

## **Summary**

And that, dear readers, is error driven development: a useful tool for coding newcomers. Taking the time to get to know errors can help us see how a coding language flows and ultimately lays a foundation for our understanding. With patience and persistence, following the lead of errors can make us more intuitive developers.

Remember:

- Everyone encounters errors.
- Error messages can help us locate our mistakes.
- They're an opportunity to learn about and better understand the programming languages and frameworks.
- When we address errors incrementally, they are less intimidating.
- With practice, errors will become less frequent and less daunting.

If you've made it this far, I hope you've gained an appreciation for coding errors.

Happy coding!

![happy coding](https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif)

## **Resources**

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong

- https://medium.com/@nerdplusdog/how-to-read-and-resolve-common-error-codes-in-ruby-9a3ae4bfb0db

- https://news.codecademy.com/errors-in-code-think-differently/

- https://www.browserstack.com/guide/tdd-vs-bdd-vs-atdd

- https://guides.rubyonrails.org/layouts_and_rendering.html

- https://halogenandtoast.com/error-driven-development/

- https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/

- https://roberteshleman.com/blog/2014/07/09/learning-rails-via-error-driven-development/
