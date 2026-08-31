const fs = require('fs');
const file = 'vite.config.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace("reviews.');\n          }\n      } catch (err) {", "reviews.');\n      } catch (err) {");
fs.writeFileSync(file, content);
