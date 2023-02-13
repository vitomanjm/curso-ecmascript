const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Apple, Banana, Kiwi, Apple, PineApple, Pear, etc. etc. etc.';

for (const match of fruit.matchAll(regex))
{
    console.log(match);
}