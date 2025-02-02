# D3 Graphing Tutorials for Self Learning

```html
root_project 
├── scripts/
│   └── data.json
│   └── graph.js     # D3 visualization code (optional, can be inline)
├── styles/
│   └── styles.css   # CSS styles sheet
├── index.html       # Main visualization page
```

## index.html
This file will is conventionally referred to by Github Pages and VSC's Live Server extension to build the Page.

To reference styles.css, position `<link rel="stylesheet" href="styles/styles.css">` in `<head>`:
```html
<head>
    <link rel="stylesheet" href="styles/styles.css">
    
</head>
```

To reference graph.js script, position `<script src="/scripts/graph.js"></script>` at the right location:
```html
    <body>
        ...
        <script src="/scripts/graph.js"></script>
        ...
    </body>
```

