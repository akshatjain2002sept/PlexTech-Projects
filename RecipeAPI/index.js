const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  
const pizza = {
    name: "Pizza Dough",
    ingredients: [
        "1.5 cups water", 
        "1 package of dry yeast",
        "3.75 bread flour",
        "2 tablespoons extra virgin olive oil",
        "2 teaspoons salt",
        "1 teaspoon sugar"
    ],
    instructions: [
        "Proof the yeast",
        "Make and knead the pizza dough",
        "Let the dough rise"
    ],
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg'
}

const parmesan = {
    name: "Parmesan",
    ingredients: [
        "2 tablesppons unsalted butter",
        "4 cloves garlic, minced",
        "2 cups chicken broth",
        "1 cup milk, or more, as needed",
        "8 ounces uncooked fettuccine",
        "Kosher salt and freshly ground black pepper, to taste",
        "1/4 cup freshly grated Parmesan cheese",
        "2 tablespoons chopped fresh parsley leaves"
    ],
    instructions: [
        "Melt butter in a large skillet over medium high heat. Add garlic and cook, stirring frequently, until fragrant, about 1-2 minutes.",
        "Stir in chicken broth, milk and fettuccine; season with salt and pepper, to taste.",
        "Bring to a boil; reduce heat and simmer, stirring occasionally, until pasta is cooked through, about 18-20 minutes. Stir in Parmesan. If the mixture is too thick, add more milk as needed until desired consistency is reached."
    ],
    image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f69a7f4192b94d8395757b365ac6d866/GarlicParmPasta.jpg'
}

const casarecce = {
    name: "Casarecce",
    ingredients: [
        "cherry tomatoes 250g, halved",
        "spring onions 3, finely chopped",
        "extra-virgin olive oil 4 tbsp",
        "red wine vinegar 3 tbsp",
        "Tabasco 4-5 dashes",
        "casarecce 200g",
        "basil a few leaves, torn"
    ],
    instructions: [
        "In a bowl, mix together the cherry tomatoes, spring onions, olive oil, vinegar, Tabasco and season really well with salt and pepper.",
        "Add the casarecce to a large pan of salted boiling water and cook until al dente.",
        "Before draining the pasta, add 1-2 tbsp of the cooking water to the sauce.",
        "Drain the pasta and toss with the sauce.",
        "Sprinkle over the torn basil and serve."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Prawn-Orecchiette-e44a820.jpg?webp=true&quality=90&resize=408%2C271"
}

const pesto = {
    name: "Pasta with Pesto",
    ingredients: [
        "garlic 4 cloves",
        "basil leaves a small handful, plus garnish",
        "salt flakes",
        "pine nuts 50g",
        "extra-virgin olive oil",
        "parmesan 50g grated",
        "dried pasta"
                ],
    instructions: [
        "Put the garlic and basil leaves in a mortar and add the salt. Add the pine kernels and grind to a paste, slowly drizzling in some olive oil. Add the parmesan and continue to grind with the pestle, adding enough oil to achieve a smooth, brilliant-green sauce.",
        "Boil the pasta in salted water following the packet instructions. Drain well, transfer to a warmed bowl and mix thoroughly with the pesto sauce. The sauce should coat each piece of pasta and there should be none left on the plate. Decorate with basil leaves and serve."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2014/12/2065.jpg?webp=true&quality=90&resize=408%2C271"
}

const noKnead = {
    name: "No-knead Pizza",
    ingredients: [
        "active dried yeast ¼ tsp",
        "golden caster sugar ½ tsp",
        "plain flour 500g, plus more for dusting",
        "salt 1 tsp",
        "semolina for the tray"
    ],
    instructions: [
        "Mix the yeast with 400ml warm water and the sugar, stir and leave for 5 minutes. Put the flour and salt in a bowl. Gradually mix in the liquid and form a claggy, rough dough (there’s no need to knead). Cover with clingfilm and leave in a coolish spot in the kitchen overnight (but not in the fridge).",
        "To make the pizza sauce, sizzle the garlic in 2 tbsp olive oil then tip in the tomatoes. Simmer for 12-15 minutes until the sauce is thick, then leave to cool.",
        "The next day, tip the dough out on to a floured surface. It will be very sticky and bubbly. Bring together in a rough lump by adding a little extra flour – remembering the less flour you add, the puffier the dough will be. Divide into 2 and drop onto 2 baking trays which have been lightly dusted with semolina. Push and stretch into 2 rough pizza shapes with your floured hands (you won’t be able to roll it).",
        "Skin the sausages then mix the meat with the fennel seeds. Roll into little meatballs (about 20).",
        "Heat the oven to 240C/fan 220C/gas 9. Spread a thin layer of sauce over each pizza – not too much otherwise it’ll be soggy (you can freeze the rest to use another time). Drop the meatballs all over, spaced evenly. Bake in the oven for 10-15 minutes until puffed and golden. To finish, tear over the burrata and scatter with fresh basil leaves and seasoning to serve."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/04/6344.jpg?webp=true&quality=90&crop=2px%2C388px%2C596px%2C397px&resize=596%2C397" ,
}
const broad_bean = {
    name: "Broad bean and mint panzanella with burrata",
    ingredients: [
        "rough textured bread 2 slices, leave it until it is a day or two old",
        "red wine vinegar 2 tbsp",
        "olive oil",
        "broad beans 4 handfuls, double podded",
        "celery 1 stick, finely sliced",
        "cucumber ½, peeled and finely chopped",
        "anchovies 2, finely chopped",
        "baby capers 2 tbsp, drained",
        "mint a bunch, leaves picked",
        "burrata 4 small or 2 large"
    ],
    instructions: [
        "Pull the bread into bite-sized pieces and put it into the bottom of a large bowl. Sprinkle on 1 tbsp cold water, 1 tbsp red wine vinegar and 2 tbsp olive oil and leave it to sit for 30 minutes.Add the broad beans, celery and cucumber. Mix the anchovies with the remaining vinegar, 2 tbsp olive oil, and add plenty of pepper.",
        "Pour this over the salad, add the capers and toss everything together. Leave to sit for 15 minutes (or more if you like), then finely chop the mint and toss through the salad at the last minute (if you do this earlier, it may turn black). Serve the salad on 4 plates with a whole burrata each (or half a large one) and drizzle over more olive oil."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2016/07/8742.jpg?webp=true&quality=90&resize=612%2C408" ,
}
const ricotta = {
    name: "Ricotta Gnudi with Sage Butter",
    ingredients: [
        "ricotta 500g",
        "parmesan 75g, grated",
        "nutmeg a good grating of fresh",
        "white pepper",
        "semolina 500g",
        "butter 150g",
        "sage 1 bunch"
    ],
    instructions: [
        "Tip the ricotta into a sieve over a bowl and put in the fridge overnight to drain",
        "The next day, put the ricotta into a bowl, add the parmesan, nutmeg and seasoning, then mix well.",
        "Pour half the semolina onto a small tray. Scoop out large teaspoons of the ricotta mix and roll into little dumpling shapes. Gently roll in the semolina until coated. Tip over the rest of the semolina so it covers the balls then put in the fridge and leave overnight.",
        "When you’re nearly ready to serve the gnudi, heat the butter in a large frying pan and, when foaming, add the sage leaves and cook until crisped, then scoop out onto kitchen paper. Take the butter off the heat until the gnudi are ready.",
        "To cook the gnudi, heat a large, wide pan with boiling, salted water. It’s easiest to cook the gnudi in two batches so they don’t stick together. Turn the heat down so the water is at a gentle simmer, then lower in the gnudi. Simmer for 3 minutes, or until they float to the surface, then use a slotted spoon to scoop them into the butter pan. Repeat with the second batch, then put the butter pan back on the heat and just warm the butter through before spooning over the gnudi. Serve in warm bowls with the sage and extra parmesan, if you like."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/ricotta-gnudi.jpg?webp=true&quality=45&crop=8px%2C2043px%2C3529px%2C2351px&resize=1240%2C826" ,
}

const silican = {
    name: "Sicilian Aubergine Pizza",
    ingredients: [
        "ciabatta bread mix ½ x 500g bag",
        "olive oil",
        "aubergines 2 medium",
        "dried oregano 1-2 tsp",
        "crème fraîche 150g",
        "parmesan (or veggie alternative) 4 tbsp grated",
        "sultanas 2 tbsp",
        "pine nuts 2 tbsp",
        "red onion ½ small, finely chopped",
        "rocket a handful",
        "fresh vegetarian pesto a couple of tbsp to serve"
    ],
    instructions: [
        "Make up the bread mix following the pack instructions, but adding 1 tbsp of oil into the water to mix in. Cover and leave in a warm place until the dough has doubled in size.",
        "Meanwhile, cut the aubergines into ½ cm-wide slices. Brush both sides of each slice with some olive oil, season and sprinkle with a little oregano. Heat a griddle pan and grill the aubergine slices over a medium heat for a couple of minutes on each side until charred and soft. Keep going until all the slices are cooked.",
        "Heat the oven to 220C/fan 200C/gas 7. To assemble the pizzas, halve the dough and, using a little extra bread mix or flour, roll out each half to a thin pizza on a baking sheet. Mix the crème fraîche with 2 tbsp of the parmesan and some seasoning and spread over the bases. Arrange the aubergine slices on top and scatter with the sultanas, pine nuts, onion and remaining parmesan. Bake for 12-15 minutes, or until the bases are crisp, and tops bubbling. Add the rocket and spoon on some pesto if you like."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8760.jpg?webp=true&quality=45&resize=1201%2C800" ,
}

const prawn_orecchiette = {
    name: "Prawn orecchiette with roasted-shell olive oil",
    ingredients: [
        "whole shell-on large raw prawns 12",
        "olive oil 6 tbsp",
        "orecchiette 150g",
        "garlic 2 cloves, finely sliced",
        "dried chilli flakes a good pinch",
        "flat-leaf parsley a handful, chopped"
    ],
    instructions: [
        "Twist the heads off the prawns and peel the shells from the bodies (but don’t discard them), leaving the tails on. Cut down the back of the prawns and remove the black vein inside. Give the prawns a rinse then pat dry on kitchen paper.",
        "Heat the olive oil in a frying pan and gently fry the heads and shells for 5 minutes. Scoop out the heads and shells leaving behind as much oil as possible.",
        "Cook the orecchiette in salted boiling water following pack instructions. Drain, keeping a cup of the cooking water.",
        "Add the garlic and chilli to the oil. Fry gently so the garlic doesn’t brown. Add the butterflied prawns and a pinch of salt, and cook until just pink. Add the orecchiette to the pan with enough reserved pasta water to make it saucy, and toss. Add parsley and toss again before serving."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/08/Rotolo-feature-shot-8cd6323.jpg?webp=true&quality=90&resize=408%2C271" ,
}
const lasagne = {
    name: "White lasagne",
    ingredients: [
        "dried porcini 15g",
        "olive oil",
        "onion 1, finely chopped ",
       " garlic 3 cloves, crushed",
        "pancetta cubes 150g",
        "veal mince 500g",
        "plain flour 1 tbsp",
        "white wine 300ml",
        "chicken stock 200ml",
        "thyme 2 tsp of leaves",
        "fresh lasagne 8-10 sheets",
        "butter 50g",
        "plain flour 50g",
        "milk 750ml",
        "nutmeg a good grating",
        "parmesan 100g, grated"
    ],
    instructions: [
        "Put the porcini in a small bowl and pour over just enough boiling water to cover.",
        "Heat a little olive oil in a large pan and cook the onion and garlic until soft.Add the pancetta and cook for a few minutes until the fat renders down. Add the veal and cook, breaking it up with a spoon until it starts to brown. Stir in the flour.",
        "Chop the porcini and add to the pan along with the soaking liquid (watch out for any gritty bits left in the bottom of the bowl). Add the wine, stock and thyme and season. Leave to simmer for 30 minutes until the sauce has reduced and sticks to the mince.",
        "To make the béchamel, melt the butter in a pan then add the flour. Cook for a few minutes, stirring, then gradually pour in the milk until you have a smooth sauce. Cook for 2-3 minutes to get rid of the floury taste. Stir in the nutmeg and most of the parmesan and season.",
        "Heat the oven to 190C/fan 170C/gas 5. Layer the mince, lasagne sheets and béchamel in a baking dish, finishing with a layer of lasagne and béchamel. Sprinkle over the rest of the parmesan. Bake for 40 minutes, until golden."
    ],
    image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/CLAMS.jpg?webp=true&quality=45&crop=23px%2C2095px%2C6186px%2C4121px&resize=1240%2C826"
}

const recipes = [ 
    pizza,
    parmesan,
    pesto,
    casarecce,
    prawn_orecchiette,
    lasagne,
    silican,
    noKnead,
    broad_bean,
    ricotta
]

app.post('/api/recipes', (req, res) => {
    console.log(req.body);
    recipes.push(req.body);
    res.send(recipes);
})


app.get('/api/recipes', (req, res) => {
    res.send(recipes);
});

// PORT (Environment Variable)
const port = process.env.PORT || 3000
app.listen(3000, () => console.log(`Listening on port ${port}...`))








// All Demo stuff
const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
];

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

// /api/courses/1
app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        //400 Bad Request
        // The user input was not correct
        res.status(400).send(result.error);
        return;
    }

    const course = {
        id: courses.length + 1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});





