jquery.smoothScrollTo
=====================

Usage example.

HTML:
```html
<a href="#foobar" class="anchor">Lorem ipsum</a>
<!-- ... -->
<div id="foobar">target div</div>
```

JS:
```javascript
$('a.anchor').smoothScrollTo();
```

Demo:
http://najki.github.io/jquery.smoothScrollTo/demo.html

Options:
* scrollTime - animation time in miliseconds
* onBefore - called before animation starts (only if target is found)
* onAfter - called after animation ends (only if target is found)
