var markdown = `
# Installation

*If you're having troubles installing, please follow [this troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Windows**
- \`npm i better-quickdb\`
- Error?
    1. Install the **latest** of node 10 or node 12.
    2. Start an Admin PowerShell: Right-click the start icon, then pick \`Windows PowerShell (Admin)\`
    3. Install *both* vs2015 and vs2017 libraries. Each line will take ~5-10 minutes.

       \`\`\`sh
       npm install --global --production --vs2015 --add-python-to-path windows-build-tools
       npm install --global --production --add-python-to-path windows-build-tools node-gyp
       \`\`\`

    4. In your project, make sure you're not fighting with old build configurations. Delete **both**
       * your \`%USERPROFILE%/.node-gyp\` and
       * your project's \`node_modules\` directories.
    5. Set up \`%USERPROFILE%/.npmrc\` correctly:
       \`\`\`sh
       msvs_version=2015
       python=python2.7
       \`\`\`
       (where \`%USERPROFILE%\` is your home directory).
    6. Run \`npm install better-quickdb\`

**Linux**
- \`npm i better-quickdb\`

***Note:** Windows users may need to do additional steps [listed here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Mac**
1. **Install:** XCode
2. **Run:** \`npm i -g node-gyp\` in terminal
3. **Run:** \`node-gyp --python /path/to/python2.7\` (skip this step if you didn't install python 3.x)
4. **Run:** \`npm i better-quickdb\`

---

# Starting
**This module is similar to \`quick.db\` but you have to use \`init\` function to access the database.**
This \`init\` function takes \`name\` parameter which can be used to create custom database file. Name is optional.
> This function returns SQLite Database.

# Example

- Default

\`\`\`js
const db = require("better-quickdb");
db.init(); // creates json.sqlite
\`\`\`

- Custom

\`\`\`js
const db = require("better-quickdb");
db.init("./mydb"); // creates mydb.sqlite
\`\`\`

---

# New Features

\`\`\`js
const db = require("better-quickdb");
// init & sql, custom filename & path is possible
const sql = db.init("./database"); // creates database.sqlite instead of json.sqlite

// add
db.math(key, "+", val);

// subtract
db.math(key, "-", val);

// deleteAll
db.deleteAll();

// Custom SQL query
sql.prepare("SELECT * FROM table WHERE something = (?)").get("someval");
\`\`\`

> **Wait, \`db.math\` types are: \`+\`, \`-\`, \`*\`, \`/\` and \`%\`.**

---

# Quick Example

\`\`\`js
const db = require("better-quickdb"); // quick.db
let sql = db.init(); // sql

db.set("user", { name: "john" });

db.get("user") // -> { name: "john" }

db.has("user") // -> true

db.math("user.balance", "+", 3000); // adds 3000

db.push("user.items", "carrot"); // pushes carrot to items

sql.prepare("SELECT * FROM json WHERE ID = (?)").get("user"); // SQL Statement support
// -> { ID: "user", json: "…"}

db.deleteAll() // -> true
\`\`\`
`;

var converter = new showdown.Converter();
var html = converter.makeHtml(markdown);
document.getElementById("data").innerHTML = html;
