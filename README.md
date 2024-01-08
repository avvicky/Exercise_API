<a name="readme-top"></a>

# Exercise_API

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

This API gives you access to over 1300 exercises with individual exercise data and animated demonstrations

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### ListAllExercises

Returns All the exercises

```js
fetch('https://exercise-api-lyart.vercel.app/exercises')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```
### ListByName

Returns the exercises that similar the name field

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/searchbyname/{name}')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```

### ListofBodyParts

Returns the list of BodyParts

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/bodypartlist')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```

### ListByBodyPart

Returns the exercises that trains the BodyPart

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/listbybodypart/{bodypart}')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```

### ListById

Return the exercise that with the searched id

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/searchbyid/{id}')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```

### ListOftargetMuscles

Returns the list of Target Muscle

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/listoftargetmuscles')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```

### ListByTargetMuscle

Returns the exercises that trains Target Muscle

```js
fetch('https://exercise-api-lyart.vercel.app/exercises/listbytargetmuscle/:muscle')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>
