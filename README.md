# ⌛ Easy Estimated Read Time
<p>
    <img src="https://img.shields.io/npm/v/easy-read-time.svg" />
    <img src="https://img.shields.io/bundlephobia/min/easy-read-time.svg" />
    <img src="https://img.shields.io/npm/dy/easy-read-time.svg" />
    <img src="https://img.shields.io/twitter/follow/alexginns.svg?style=social" />
</p>
> Simple estimated medium like read times.

## Features 🔥
- Less than 4kb!
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
The function takes two arguments the string you wish to get the read time for and speed of reading the text in words per minute, the default is set to 200 (the average reading time for adults is 250 - 300 words per minute) allowing extra time for viewing of images and other content. 

| Argument  | Type | Description  |
| :------------ |:---------------|:---------------|
| string | string | Input String |
| wordTime | number | Speed of reading the text in Words per Minute |

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
