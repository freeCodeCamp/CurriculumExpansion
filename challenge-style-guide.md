# A guide to designing Free Code Camp coding challenges 

> “Talk is cheap. Show me the code.” — Linus Torvalds

Free Code Camp offers 1,200 hours of interactive coding challenges. These are 100% focused on the practical skill of building software. You code the entire time. You learn to code by coding.

You can learn theory through free online university courses. Free Code Camp will focus instead on helping you learn to code and practice by building apps.

With that practical focus in mind, let’s talk about the requirements for our coding challenges. (Note that these requirements do not apply to our algorithm challenges, checkpoint challenges, or projects.)

## The 2 minute rule 

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions, understand the seeded code, write their own code, and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:
- simplify the challenge, or
- split the challenge into two challenges.

The 2 minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straight-forward.

We have JavaScript events that track how long it takes for campers to solve challenges and we can use them to identify challenges that need to be simplified or split.

## Modularity

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name. 

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

## Naming challenges

Naming things is hard. We've made it easier by imposing some constraints. 

All challenge should be explicit and should follow this pattern:

[verb] [object clause]

Here are some example challenge names:

- Use Clockwise Notation to Specify the Padding of an Element
- Condense arrays with .reduce
- Use Bracket Notation to Find the First Character in a String

## Writing tests

Challenges should have the minimum number of tests necessary to verify that a camper understands a concept.

Our goal is to communicate the single point that the challenge is trying to teach, and test that they have understood that point.

## Writing instructions

Challenges should use as little jargon as necessary. All jargon should be defined immediately in plain English.

Don't use outbound links. These interrupt the flow. And campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's wiki article on the forum.

You can add diagrams if absolutely necessary.

## Why do we have all these rules?

Our goal is to have a fun, clear interactive learning experience.

Designing interactive coding challenges is hard. It would be so much easier to write a lengthy explanation, or to create a video tutorial. There's a place for those on Medium and YouTube. But for our core curriculum, we're sticking with what works best for most people - a fully interactive, video game-like experience. 

We want campers to achieve a flow state. We want them to build momentum and blast through our curriculum with as few snags as possible. We want them to go into the projects with confidence and a wide exposure to programming concepts.

Creating these challenges requires immense creativity and attention to detail. But you'll have plenty of help. You have support from a whole team of contributors, whom you can bounce ideas off of and demo your challenges to. Stay active in the [contributors room](https://gitter.im/freecodecamp/contributors) and ask lots of questions.

With your help, we can design an interactive coding curriculum that will help millions of people learn to code for years to come.
