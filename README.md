# ⌛ Easy Estimated Read Time
![npm version](https://img.shields.io/npm/v/easy-read-time.svg)
![bundlephobia](https://img.shields.io/bundlephobia/min/easy-read-time.svg)
![npm downloads](https://img.shields.io/npm/dy/easy-read-time.svg)
![twitter](https://img.shields.io/twitter/follow/alexginns.svg?style=social)
> Simple medium like estimated read times.

## Features 🔥
- Less than 4kb! (1.08kb Minified)
- Zero dependencies!
- Calculates read time of input string (rounds to closest minute).
- Pass in plain text / HTML / markdown.
- Strips all markdown and HTML for better read time estimates.
- Easy to use! 💪

## Install 🔮 
```
$ npm i easy-read-time
```

or

```
$ yarn add easy-read-time
```

## Usage 💻

```
import getReadTime from "easy-read-time";

getReadTime(text, 200);
```

### Input
The function takes three arguments the string you wish to get the read time for, the speed of reading the text in words per minute, the default is set to 200 (the average reading time for adults is 250 - 300 words per minute) allowing extra time for viewing of images and other content, and a custom string this field is optional and the default is 'min read', if you pass in 'minute read' formattedString will return '2 minute read'.

| Argument  | Type | Description  |
| :------------ |:---------------|:---------------|
| string: required | string | Input String |
| wordTime: optional | number | Defaults to 200 - Speed of reading the text in Words per Minute |
| customString: optional | number | Default to 'min read' - The text after the duration eg: 2 + 'minute read' |

### Output
The method returns an object

| Property  | Type | Description  |
| :------------ | :--------------- | :---------------|
| duration | number | Duration of the input string (in minutes) |
| roundDuration | number | Duration of the input string (in minutes) rounded to closest minute |
| totalWords | number | Number of words in the input string |
| formattedString | string | Medium like read time string '2 min read' |

#### Sample Response

```
{
    duration: 2.3,
    roundDuration: 2,
    totalWords: 400,
    formattedString: '2 min read'
}
```
