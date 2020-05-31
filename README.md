# better-quickdb

---

**better-quickdb** - updated version of **quick.db** with a lot more features.

---

- **Persistent storage w/ no setup** *(Data doesn't disappear through restarts)*
- Beginner Friendly
- Similar to quick.db
- [Discord Support](https://discord.gg/uqB8kxh)
- **Multiple tables support**
- **and more!**

---

# Examples

```js
const db = require('better-quickdb');

// init the database
db.init();

// Setting an object in the database:
db.set('userInfo', { difficulty: 'Easy' })
// -> { difficulty: 'Easy' }

// Pushing an element to an array (that doesn't exist yet) in an object:
db.push('userInfo.items', 'Sword')
// -> { difficulty: 'Easy', items: ['Sword'] }

// Adding to a number (that doesn't exist yet) in an object:
db.math('userInfo.balance', "+", 500)
// -> { difficulty: 'Easy', items: ['Sword'], balance: 500 }

// Repeating previous examples:
db.push('userInfo.items', 'Watch')
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 500 }
db.math('userInfo.balance', "+", 500)
// -> { difficulty: 'Easy', items: ['Sword', 'Watch'], balance: 1000 }

// Fetching individual properties
db.get('userInfo.balance') // -> 1000
db.get('userInfo.items') // ['Sword', 'Watch']

// Deleting the table
db.deleteAll() // boolean
```

---

# Additional Features

> Note: **Using db.init() is compulsory**.

## Custom Database Name, Path

```js
const db = require("better-quickdb");
db.init("./database"); // creates database.sqlite in the given path.

```

## Deleting the table
**Default table name is `json`**.

```js
db.deleteAll();
```

## Math
> **`db.add` or `db.subtract` is not available in this package.**

**db.math** supports add, sub, div, mul and mod. It can be used like this:

```js
db.math("key", "type", data);
```

_Example:_

```js
const db = require("better-quickdb");
db.init();

// add
db.math("math", "+", 20);

// sub
db.math("math", "-", 10);

// mod
db.math("math", "%", 2);

// mul
db.math("math", "*", 7);

// div
db.math("math", "/", 2);
```

---

# SQL
> **You can use custom SQL statements in this db**.

## Example

```js
const db = require("better-quickdb");
const sql = db.init();

// Set using db
let set = db.set("foo", "bar");
console.log(set);

// fetch using SQL statement
let data = sql.prepare("SELECT * FROM json WHERE ID = (?)").get("foo");
console.log(data);
```

---

# Installation

*If you're having troubles installing, please follow [this troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Linux & Windows**
- `npm i better-quickdb`

***Note:** Windows users may need to do additional steps [listed here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Mac**
1. **Install:** XCode
2. **Run:** `npm i -g node-gyp` in terminal
3. **Run:** `node-gyp --python /path/to/python2.7` (skip this step if you didn't install python 3.x)
4. **Run:** `npm i better-quickdb`

---

# Join Our Discord Server
**[discord.gg/uqB8kxh](https://discord.gg/uqB8kxh)**
