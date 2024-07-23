# Page and Component Architecture

```bash
Legend
    [ Page ]
    < Component >
    ( non-component content )
    ++ Pertinent usage information ++
```

```bash
( all pages )
├─ < CustomCursor >
│
├─ < NavBar >
│    └─ < ButtonSmall >
│
├─ < PreFooter >
└─ < FooterSection >
```

## Specific Pages

```bash
Home
├─ < CustomCursor >
│
├─ < NavBar >
│    └─ < ButtonSmall >
│
├─ < JumbotronHome >
│    ├─ ++ Honestly could probably lose this and just use the VideoPlayer ++
│    └─ < VideoPlayer >
│
├─ ( personal introduction )
│    ├─ < WorkAvailability >
│    └─ < ButtonSmall >
│
├─ < CoverHome >
│    └─ ++ Will fill space so must go inside a parent div with width or column specifications ++
│
├─ < PreFooter >
└─ < FooterSection >
```