fetch('https://im.ge/i/the-smoothie-diet-review-QMMfMKY').then(r=>r.text()).then(t=>{ const m = t.match(/og:image" content=\"([^\"]+)\"/i); console.log(m ? m[1] : 'not found'); })
