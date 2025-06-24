## 📘 Front-End Web Development Q&A

```markdown
1. **What is Semantic HTML?**  
Semantic HTML uses meaningful tags (like `<article>`, `<section>`, `<header>`) that clearly describe their purpose, improving readability and accessibility for both developers and machines.

2. **How does CSS Flexbox differ from Grid?**  
- **Flexbox**: One-dimensional layout (row or column).
- **Grid**: Two-dimensional layout (rows and columns).
Use Flexbox for simple, linear designs and Grid for complex structures.

3. **What are Media Queries?**  
Media queries apply styles based on device properties like width or screen type.
Example:
```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

4. **How do you make a website responsive?**  
- Use relative units (% / rem / vh / vw).
- Apply media queries.
- Use Flexbox/Grid.
- Make images/media fluid.
- Mobile-first design.

5. **Explain the Box Model.**  
Each element box includes:
- **Content** → text/image
- **Padding** → space inside the border
- **Border**
- **Margin** → space outside the border

6. **What is the difference between classes and IDs in CSS?**  
- `.class` → Reusable across multiple elements.
- `#id` → Unique, one element only.

7. **How can you optimize CSS for performance?**  
- Minify and compress CSS.
- Remove unused styles.
- Combine files to reduce HTTP requests.
- Use shorthand and efficient selectors.
- Defer non-critical CSS.

8. **What is the difference between relative and absolute positioning?**  
- **Relative**: Moves element relative to its normal position.
- **Absolute**: Positions element relative to the nearest positioned ancestor.

9. **How does the z-index property work?**  
Defines stack order. Higher `z-index` appears in front.
Only works on positioned elements (relative/absolute/fixed/sticky).

10. **What is the difference between padding and margin?**  
- **Padding**: Space *inside* an element’s border.
- **Margin**: Space *outside* an element, separating it from others.
```

---
📌 Save this file as `frontend-interview-questions.md` or include it in your project README.
