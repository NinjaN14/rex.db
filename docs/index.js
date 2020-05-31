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
`;

var converter = new showdown.Converter();
var html = converter.makeHtml(markdown);
document.getElementById("data").innerHTML = html;
