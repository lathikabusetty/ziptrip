## Question 4: CSS Selectors

HTML Structure provided:
```html
01 <div id="container">
02   <div class="box"></div>
03
04   <div class="box2"></div>
05   <div>
06     <div class="box"></div>
07   </div>
08 </div>
09
10 <div class="box"></div>
```

### 1. `.box`
- **Elements selected (line numbers):** 02, 06, 10
- **Why it selects them:** The class selector `.box` targets any element that has the class name "box", regardless of its position in the document.
- **Why it won't select other lines:** Other lines either don't have a class attribute, or have a different class (like `box2` on line 04).

### 2. `div .box`
- **Elements selected (line numbers):** 02, 06
- **Why it selects them:** This is a descendant selector. It targets any element with the class `box` that is inside a `div` element. Line 02 is inside the `div#container`. Line 06 is inside the `div` on line 05 (and also `div#container`).
- **Why it won't select other lines:** Line 10 has the class `box`, but based on the snippet provided, it is not inside any parent `div`. It's a sibling of `#container`.

### 3. `div.box`
- **Elements selected (line numbers):** 02, 06, 10
- **Why it selects them:** This selector targets any `div` element that also has the class `box`. All three lines (02, 06, 10) are `div` elements with `class="box"`.
- **Why it won't select other lines:** Other lines are either not `div`s, or lack the `box` class.

### 4. `[class]`
- **Elements selected (line numbers):** 02, 04, 06, 10
- **Why it selects them:** This is an attribute selector targeting any element that has a `class` attribute, regardless of its value. Lines 02, 06, and 10 have `class="box"`, and line 04 has `class="box2"`.
- **Why it won't select other lines:** The elements on lines 01 and 05 do not have a `class` attribute (line 01 only has an `id`).

### 5. `#container .box`
- **Elements selected (line numbers):** 02, 06
- **Why it selects them:** This targets any element with the class `box` that is a descendant of the element with the ID `container`. Line 02 is a direct child, and line 06 is a nested descendant.
- **Why it won't select other lines:** Line 10 has the class `box`, but it is outside of `#container`.

### 6. `#container > .box`
- **Elements selected (line numbers):** 02
- **Why it selects them:** This is a child combinator selector. It targets elements with class `box` that are *direct children* of `#container`. Line 02 is directly inside `#container`.
- **Why it won't select other lines:** Line 06 has class `box`, but it is a child of the `div` on line 05, making it a "grandchild" of `#container`, not a direct child. Line 10 is completely outside `#container`.