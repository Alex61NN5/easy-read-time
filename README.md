# Nuxt Estimate Read Time
> Simple medium like read time estimates

## Features
- Less than 4kb!
- Calculates read time of input string (rounds to closest minute)
- Pass in plain text / HTML / markdown
- Strips all markdown and HTML for better read time estimates
- Supports any version of Nuxt / Vue

## Install
```
$ npm i nuxt-estimate-read-time
```

or

```
$ yarn add nuxt-estimate-read-time
```

## Usage

Add `nuxt-estimate-read-time` to `modules` section of `nuxt.config.js`

```
{
   modules: [
     'nuxt-estimate-read-time'
   ]
}
```

In your component

```
import getReadTime from "nuxt-estimate-read-time";

getReadTime(text, 200);
```

In component html

```
<p>{{getReadTime(text, 200).formattedString}}</p>
```
#### Input
The function takes two arguments the string you wish to get the read time for and speed of reading the text in words per minute, the default is set to 200 (the average reading time for adults is 250 - 300 words per minute) allowing extra time for viewing of images and other content. 

| Argument  | Defaults | Type | Description  |
| :------------ | ---------------:|---------------:|:---------------|
| string | required | string | Input String |
| wordTime | 200 | number | Speed of reading the text in Words per Minute |

### Output
The method returns an object

| Variable  | Type | Description  |
| :------------ | ---------------: | :---------------|
| duration | number | Duration of the input string (in minutes) |
| roundDuration | number | Duration of the input string (in minutes) rounded to closest minute |
| totalWords | number | Number of words in the input string |
| formattedString | string | Medium like read time string '2 min read' |

```
{
    duration: 2.3,
    roundDuration: 2,
    totalWords: 400,
    formattedString: 2 min read'
}
```

## Contribution
- Contributions welcome - would like to create some jasmine tests
