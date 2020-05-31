var markdown = `
# Installation

*If you're having troubles installing, please follow [this troubleshooting guide](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Linux & Windows**
- \`npm i better-quickdb\`

***Note:** Windows users may need to do additional steps [listed here](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md).*

**Mac**
1. **Install:** XCode
2. **Run:** \`npm i -g node-gyp\` in terminal
3. **Run:** \`node-gyp --python /path/to/python2.7\` (skip this step if you didn't install python 3.x)
4. **Run:** \`npm i better-quickdb\`
`;

var converter = new showdown.Converter();
var html = converter.makeHtml(markdown);
document.getElementById("data").innerHTML = html;
