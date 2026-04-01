const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace('--bg-base: #000000;', '--bg-base: #ffffff;');
css = css.replace('--bg-surface: #0a0a0a;', '--bg-surface: #f8f9fa;');
css = css.replace('--text-primary: #ffffff;', '--text-primary: #111827;');
css = css.replace('--text-muted: #e2e8f0;', '--text-muted: #4b5563;');
css = css.replace('--border-vibrant: #ffffff;', '--border-vibrant: #111827;');
css = css.replace('--card-fill: #0a0a0a;', '--card-fill: #ffffff;');

css = css.replace(/background-color: #000000 !important/g, 'background-color: #ffffff !important');
css = css.replace(/background: #000000 !important/g, 'background: #ffffff !important');
css = css.replace(/background: #000000/g, 'background: #ffffff');
css = css.replace(/background: #0a0a0a !important/g, 'background: #f8f9fa !important');
css = css.replace(/background: #050505/g, 'background: #f8f9fa');
css = css.replace(/background: #111111/g, 'background: #ffffff');
css = css.replace(/background: #1a1a1a/g, 'background: #f1f5f9');
css = css.replace(/background: rgba\(10, 10, 10, 0\.95\)/g, 'background: rgba(255, 255, 255, 0.95)');
css = css.replace(/background: rgba\(13, 17, 23, 0\.8\)/g, 'background: rgba(248, 249, 250, 0.9)');
css = css.replace(/background: #1f2937/g, 'background: #e5e7eb');
css = css.replace(/background: #111/g, 'background: #f1f5f9');

// Specific text colors
css = css.replace(/(?<!-)color: #ffffff !important/g, 'color: #111827 !important');
css = css.replace(/(?<!-)color: #ffffff/g, 'color: #111827');
css = css.replace(/(?<!-)color: #e2e8f0/g, 'color: #4b5563');
css = css.replace(/(?<!-)color: white/gi, 'color: #111827');
css = css.replace(/(?<!-)color: #facc15 !important/g, 'color: #d97706 !important'); 
css = css.replace(/(?<!-)color: #facc15/g, 'color: #d97706');
css = css.replace(/#facc15/g, '#d97706');

// Borders
css = css.replace(/border-color: #ffffff !important/g, 'border-color: #111827 !important');
css = css.replace(/border-color: #ffffff/g, 'border-color: #111827');
css = css.replace(/border: (\w+) solid #ffffff !important/g, 'border: $1 solid #e5e7eb !important');
css = css.replace(/border: (\w+) solid #ffffff/g, 'border: $1 solid #e5e7eb');
css = css.replace(/border-bottom: (\w+) solid #ffffff !important/g, 'border-bottom: $1 solid #111827 !important');
css = css.replace(/border-bottom: (\w+) solid #ffffff/g, 'border-bottom: $1 solid #111827');
css = css.replace(/border-top: (\w+) solid #ffffff !important/g, 'border-top: $1 solid #111827 !important');
css = css.replace(/border-top: (\w+) solid #ffffff/g, 'border-top: $1 solid #111827');
css = css.replace(/border: (\w+) solid #333333/g, 'border: $1 solid #e5e7eb');

// Exceptions
css = css.replace(/\.btn-whatsapp-full \{[\s\S]*?\}/g, match => match.replace(/color: #111827/g, 'color: #ffffff'));
css = css.replace(/\.chat-header \{[\s\S]*?\}/g, match => match.replace(/color: #111827/g, 'color: #ffffff'));

fs.writeFileSync('src/index.css', css);
