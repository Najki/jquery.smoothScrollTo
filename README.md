jquery.smoothScrollTo
=====================

Usage example.

HTML:
<a href="#foobar" class="anchor">Lorem ipsum</a>
<!-- ... -->
<div id="foobar">target div</div>

JS:
$('a.anchor').smoothScrollTo();


Options:
* scrollTime - animation time in miliseconds
* onBefore - called before animation starts (only if target is found)
* onAfter - called after animation ends (only if target is found)
